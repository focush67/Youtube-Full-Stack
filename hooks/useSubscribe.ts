import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserState } from "@/redux/store";
import { addSubscriber, removeSubscriber } from "@/redux/slices/current-user";
interface UseSubscribeProps {
  channelId: string;
}

export const useSubscribe = ({ channelId }: UseSubscribeProps) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserState);
  const router = useRouter();

  const hasSubscribed = useMemo(() => {
    if (!currentUser) return false;

    const subscriptions = currentUser.subscribedChannelIds || [];

    return subscriptions.includes(channelId);
  }, [channelId, currentUser]);

  const toggleSubscribe = useCallback(async () => {
    if (!currentUser) {
      alert("Please Sign In to continue");
      return;
    }

    try {
      if (hasSubscribed) {
        console.log("Dispatching unsubb request");
        const unsubbedResponse = await axios.delete(
          `/api/users/subscriptions`,
          {
            data: {
              channelId,
            },
          }
        );

        console.log("Unsubbed Response: ", unsubbedResponse.data);

        dispatch(
          removeSubscriber({
            id: channelId,
          })
        );

        // Need to add NEXTAUTH_URL for deployment
      } else {
        console.log("Dispatching sub request");
        const subbedResponse = await axios.post(`/api/users/subscriptions`, {
          channelId,
        });

        console.log("Subbed Response: ", subbedResponse.data);

        dispatch(
          addSubscriber({
            id: channelId,
          })
        );

        // Need to add NEXTAUTH_URL for deployment
      }

      router.refresh();
      toast.success(
        hasSubscribed ? "Unsubscribed Successfully" : "Subscribed Successfully"
      );
    } catch (error: any) {
      toast.error(
        hasSubscribed ? "Could not unsubscribe" : "Could not subscribe"
      );
    }
  }, [currentUser, channelId, hasSubscribed, router]);

  return {
    hasSubscribed,
    toggleSubscribe,
  };
};

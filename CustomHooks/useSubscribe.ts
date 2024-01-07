import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useMemo } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
interface UseSubscribeProps {
  channelId: string;
}

export const useSubscribe = ({ channelId }: UseSubscribeProps) => {
  const currentUser = useContext(CurrentUserContext);

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
        const unsubbedResponse = await axios.delete(
          `/api/users/subscriptions`,
          {
            data: {
              channelId,
            },
          }
        );

        // console.log("Unsubbed Response: ", unsubbedResponse);

        // Need to add NEXTAUTH_URL for deployment
      } else {
        const subbedResponse = await axios.post(`/api/users/subscriptions`, {
          channelId,
        });

        // console.log("Subbed Response: ", subbedResponse);

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

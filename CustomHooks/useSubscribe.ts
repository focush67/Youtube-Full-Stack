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
        await axios.delete(
          `${process.env.NEXTAUTH_URL}/api/users/subscriptions`,
          {
            data: {
              channelId,
            },
          }
        );
      } else {
        await axios.post(
          `${process.env.NEXTAUTH_URL}/api/users/subscriptions`,
          {
            channelId,
          }
        );
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

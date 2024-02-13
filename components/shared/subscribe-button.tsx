"use client";

import { useSubscribe } from "@/hooks/useSubscribe";
import Button from "./button";
interface SubscribeButtonProps {
  channelId: string;
}
const SubscribeButton: React.FC<SubscribeButtonProps> = ({ channelId }) => {
  const { hasSubscribed, toggleSubscribe } = useSubscribe({ channelId });
  return (
    <Button
      type={hasSubscribed ? "rounded-dark" : "rounded"}
      onClick={toggleSubscribe}
    >
      {hasSubscribed ? "Unsubscribe" : "Subscribe"}
    </Button>
  );
};

export default SubscribeButton;

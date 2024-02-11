"use client";

import { CreateChannelModalContext } from "@/contexts/CreateChannelContext";
import { CurrentChannelContext } from "@/contexts/CurrentChannelContext";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useState } from "react";
import { toast } from "react-hot-toast";

interface UseCommentProps {
  videoId: string | null;
}
export const useComment = ({ videoId }: UseCommentProps) => {
  const currentChannel = useContext(CurrentChannelContext);
  const currentUser = useContext(CurrentUserContext);
  const createChannelModal = useContext(CreateChannelModalContext);

  const router = useRouter();

  const [text, setText] = useState("");

  const submitComment = useCallback(async () => {
    if (!currentUser) {
      alert("Please Signin");
      return;
    }

    if (!currentChannel) {
      createChannelModal?.onOpen();
      return;
    }

    if (!videoId) return;

    const data = { videoId, text, channelId: currentChannel.id };

    try {
      if (text.trim()) {
        await axios.post(`/api/comments/${videoId}`, data).then(() => {
          setText("");
        });
      }

      router.refresh();
      toast.success("Comment Added Successfully");
    } catch (error: any) {
      toast.error("Failed to add comment");
    }
  }, [
    createChannelModal,
    currentUser,
    currentChannel,
    videoId,
    text,
    setText,
    router,
  ]);

  return {
    text,
    setText,
    submitComment,
  };
};

"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import SignIn from "./SignIn";
import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import IconButton from "@/components/shared/IconButton";
import { MdOutlineVideoCall } from "react-icons/md";
import UserAvatar, { UserAvatarSize } from "@/components/shared/UserAvatar";
import UserMenu from "./UserMenu";
import { CurrentChannelContext } from "@/contexts/CurrentChannelContext";
import { CreateChannelModalContext } from "@/contexts/CreateChannelContext";
const UserOptions = () => {
  const router = useRouter();
  const currentUser = useContext(CurrentUserContext);
  const currentChannel = useContext(CurrentChannelContext);
  const createChannel = useContext(CreateChannelModalContext);
  const [open, setOpen] = useState(true);
  const handleUploadClick = () => {
    if (!currentChannel) {
      createChannel?.onOpen();
    } else {
      router.push("/studio/upload");
    }
  };
  return currentUser ? (
    <>
      <div className="flex items-center gap-4 mr-4">
        <IconButton onClick={handleUploadClick}>
          <MdOutlineVideoCall className="w-7 h-7" />
        </IconButton>

        <UserAvatar
          imageSrc={currentUser.image}
          size={UserAvatarSize.sm}
          onClick={() => setOpen(true)}
        />
      </div>

      {open ? <UserMenu onClose={() => setOpen(false)} /> : null}
    </>
  ) : (
    <SignIn />
  );
};

export default UserOptions;

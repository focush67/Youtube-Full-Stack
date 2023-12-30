"use client";

import React, { useContext, useState } from "react";
import SignIn from "./SignIn";
import { CurrentUserContext } from "@/contextx/currentUserContext";
import IconButton from "@/components/shared/IconButton";
import { MdOutlineVideoCall } from "react-icons/md";
import UserAvatar, { UserAvatarSize } from "@/components/shared/UserAvatar";
import { signOut } from "next-auth/react";
import UserMenu from "./UserMenu";
const UserOptions = () => {
  const currentUser = useContext(CurrentUserContext);
  const [open,setOpen] = useState(true);

  return currentUser ? (
    <>
      <div className="flex items-center gap-4 mr-4">
        <IconButton>
          <MdOutlineVideoCall className="w-7 h-7" />
        </IconButton>

        <UserAvatar imageSrc={currentUser.image} size={UserAvatarSize.sm} onClick={() => setOpen(true)}/>
      </div>

      {
        open ? <UserMenu onClose={() => setOpen(false)} />: null
      }
    </>
  ) : (
    <SignIn />
  );
};

export default UserOptions;

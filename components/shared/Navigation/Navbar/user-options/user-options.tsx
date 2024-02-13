"use client";

import React, { useContext, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SignIn from "./sign-in";
import IconButton from "@/components/shared/icon-button";
import { MdOutlineVideoCall } from "react-icons/md";
import UserAvatar, { UserAvatarSize } from "@/components/shared/user-avatar";
import UserMenu from "./user-menu";

import { CreateChannelModalContext } from "@/contexts/create-channel-context";
import {
  AppDispatch,
  getCurrentChannelState,
  getCurrentUserState,
} from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "@/redux/thunks/current-user-thunk";
import { fetchCurrentChannel } from "@/redux/thunks/current-channel-thunk";

const UserOptions = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  useLayoutEffect(() => {
    console.log("Mounting");
    dispatch(fetchCurrentUser());
    dispatch(fetchCurrentChannel());
    return () => {
      console.log("Dismounting");
    };
  }, [dispatch]);

  const stateUser = useSelector(getCurrentUserState);
  const stateChannel = useSelector(getCurrentChannelState);
  const createChannel = useContext(CreateChannelModalContext);
  const [open, setOpen] = useState(false);

  const handleUploadClick = () => {
    if (!stateChannel) {
      createChannel?.onOpen();
    } else {
      router.push("/studio/upload");
    }
  };

  return stateUser ? (
    <>
      <div className="flex items-center gap-4 mr-4">
        <IconButton onClick={handleUploadClick}>
          <MdOutlineVideoCall className="w-7 h-7" />
        </IconButton>

        <UserAvatar
          imageSrc={stateUser.image}
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

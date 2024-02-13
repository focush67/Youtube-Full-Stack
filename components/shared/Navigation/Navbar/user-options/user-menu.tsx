"use client";

import { signOut } from "next-auth/react";
import MenuItems from "./menu-items";
import { PiUserSquareFill, PiYoutubeLogo, PiSignOut } from "react-icons/pi";
import { useContext } from "react";
import { CreateChannelModalContext } from "@/contexts/create-channel-context";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { getCurrentChannelState } from "@/redux/store";

interface UserMenuProps {
  onClose: () => void;
}
const UserMenu: React.FC<UserMenuProps> = ({ onClose }) => {
  const createChannelModal = useContext(CreateChannelModalContext);
  const currentChannel = useSelector(getCurrentChannelState);
  const router = useRouter();

  return (
    <>
      <div className="h-screen w-screen fixed z-30" onClick={onClose} />
      <div className="absolute rounded-md shadow-md w-72 bg-zinc-800 right-2 top-16 text-sm flex flex-col overflow-hidden z-40">
        <MenuItems
          logo={<PiUserSquareFill className="h-7 w-7 mr-4" />}
          label={"Your Channel"}
          onClick={() => {
            if (!currentChannel) {
              createChannelModal?.onClose();
            } else {
              router.push(`/channel/${currentChannel.id}`);
            }
            onClose();
          }}
        />

        <MenuItems
          logo={<PiYoutubeLogo className="h-7 w-7 mr-4" />}
          label={"Youtube Studio"}
          onClick={() => {
            if (!currentChannel) {
              createChannelModal?.onOpen();
            } else {
              router.push(`/studio`);
            }
            onClose();
          }}
        />

        <MenuItems
          logo={<PiSignOut className="h-7 w-7 mr-4" />}
          label={"Signout"}
          onClick={() => {
            signOut(), onClose;
          }}
        />
      </div>
    </>
  );
};

export default UserMenu;

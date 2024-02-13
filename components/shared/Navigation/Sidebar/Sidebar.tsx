"use client";

import { SidebarContext } from "@/contexts/sidebar-context";
import { Channel } from "@prisma/client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import UserAvatar, { UserAvatarSize } from "../../user-avatar";
import NavigationHeader from "../navigation-header";
import MenuItems from "../Navbar/user-options/menu-items";
import { MdOutlineHome, MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from "react-redux";
import { getCurrentUserState } from "@/redux/store";

interface SidebarProps {
  subscribedChannels: Channel[];
}

const Sidebar: React.FC<SidebarProps> = ({ subscribedChannels }) => {
  const sidebar = useContext(SidebarContext);
  const currentUser = useSelector(getCurrentUserState);
  const router = useRouter();

  const handleItemClick = (onClick: () => void) => {
    onClick();
    sidebar?.onClose();
  };

  return (
    <>
      {sidebar?.isOpen && (
        <div
          className={`bg-black bg-opacity-50 h-screen w-screen fixed z-30`}
          onClick={() => sidebar.onClose()}
        />
      )}

      <div
        className={`fixed w-64 bg-stone-950 z-40 mt-2 px-6 flex flex-col h-screen oveflow-scroll no-scrollbar ${
          sidebar?.isOpen ? "translate-x-0" : "-translate-x-full"
        } ease-in-out duration-300`}
      >
        <NavigationHeader />
        <div className="pt-6 pb-3 border-b border-b-neutral-700">
          <MenuItems
            label="Home"
            logo={<MdOutlineHome className="h-6 w-6 mr-4" />}
            rounded
            onClick={() => handleItemClick(() => router.push("/"))}
          />
          {currentUser ? (
            <MenuItems
              label="Subscriptions"
              logo={<MdOutlineSubscriptions className="h-6 w-6 mr-4" />}
              rounded
              onClick={() =>
                handleItemClick(() => router.push("/subscriptions"))
              }
            />
          ) : null}
        </div>
        {currentUser ? (
          <div className="pt-3">
            <h2 className="font-medium mb-2">Subscriptions</h2>
            {subscribedChannels.map((subscribedChannel) => {
              return (
                <MenuItems
                  key={subscribedChannel.id}
                  label={subscribedChannel.name}
                  logo={
                    <UserAvatar
                      imageSrc={subscribedChannel.imageSrc}
                      size={UserAvatarSize.sm}
                      className="mr-4"
                    />
                  }
                  rounded
                  onClick={() =>
                    handleItemClick(() =>
                      router.push(`/channel/${subscribedChannel.id}`)
                    )
                  }
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Sidebar;

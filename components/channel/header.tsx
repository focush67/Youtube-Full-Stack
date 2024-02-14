"use client";

import { Channel } from "@prisma/client";
import UserAvatar, { UserAvatarSize } from "../shared/user-avatar";
import { compact } from "@/utilities/num"; // Imported dayjs
import Link from "next/link";
import Button from "../shared/button"; // Imported button
import SubscribeButton from "../shared/subscribe-button";
import { useSelector } from "react-redux";
import { getCurrentUserState } from "@/redux/store";

interface ChannelHeaderProps {
  channel: Channel;
  videoCount: Number;
}
const ChannelHeader: React.FC<ChannelHeaderProps> = ({
  channel,
  videoCount,
}) => {
  const stateUser = useSelector(getCurrentUserState);

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0 px-24 py-6 justify-between items-center">
      <div className="flex flex-col md:flex-row gap-0 md:gap-6 items-center md:items-start">
        <UserAvatar size={UserAvatarSize.lg} imageSrc={channel.imageSrc} />

        <div className="flex flex-col pt-4 gap-4 md:gap-0">
          <h1 className="2xl text-center md:text-start">{channel.name}</h1>
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 text-stone-400">
            <p className="font-medium">{`@${channel.handle}`}</p>
            <p>{`${compact(channel?.subscriberCount)} Subscribers`}</p>
            <p>{`${compact(videoCount.valueOf())} Videos`}</p>
          </div>
        </div>
      </div>

      {channel.userId === stateUser?.id ? (
        <Link href={"/studio"}>
          <Button type="rounded-dark">Manage Videos</Button>
        </Link>
      ) : (
        <SubscribeButton channelId={channel.id} />
      )}
    </div>
  );
};

export default ChannelHeader;

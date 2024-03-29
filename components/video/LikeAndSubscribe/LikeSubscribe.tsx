"use client";

import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import { Channel, Video } from "@prisma/client";
import { useContext } from "react";
import LikeDislikeButton from "./LikeDislikeButton";
import Link from "next/link";
import UserAvatar, { UserAvatarSize } from "@/components/shared/UserAvatar";
import { compact } from "@/utilities/Num";
import Button from "@/components/shared/Button";
import SubscribeButton from "@/components/shared/SubscribeButton";

interface LikeSubscribeProps {
  video: Video;
  channel: Channel;
}
const LikeSubscribe: React.FC<LikeSubscribeProps> = ({ video, channel }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3 items-center">
        <Link href={`/channel/${channel.id}`}>
          <UserAvatar size={UserAvatarSize.md} imageSrc={channel.imageSrc} />
        </Link>

        <div className="flex flex-col justify-between">
          <Link href={`/channel/${channel.id}`}>
            <h2 className="md:text-sm lg:text-md xl:text-lg">{channel.name}</h2>
          </Link>
          <p className="text-neutral-400 text-[13px]">
            {compact(channel.subscriberCount)} subscribers
          </p>
        </div>

        {channel.userId === currentUser?.id ? (
          <Link href={"/studio"}>
            <Button type="rounded-dark">Manage</Button>
          </Link>
        ) : (
          <SubscribeButton channelId={channel.id} />
        )}
      </div>

      <LikeDislikeButton video={video} />
    </div>
  );
};

export default LikeSubscribe;

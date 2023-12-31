"use client";

import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import { Channel } from "@prisma/client";
import { useContext } from "react";
import UserAvatar, { UserAvatarSize } from "../shared/UserAvatar";
import { compact } from "@/utilities/Num";
import Link from "next/link";
import Button from "../shared/Button";

interface ChannelHeaderProps{
    channel: Channel;
    videoCount: Number
}
const ChannelHeader:React.FC<ChannelHeaderProps> = ({channel,videoCount}) => {
    const currentUser = useContext(CurrentUserContext);
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0 px-24 py-6 justify-between items-center">
        <div className="flex flex-col md:flex-row gap-0 md:gap-6 items-center md:items-start">
            <UserAvatar size={UserAvatarSize.lg} imageSrc={channel.imageSrc} />

            <div className="flex flex-col pt-4 gap-4 md:gap-0">
                <h1 className="2xl text-center md:text-start">
                    {channel.name}
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 text-stone-400">
                    <p className="font-medium">{`@${channel.handle}`}</p>
                    <p>{`${compact(channel?.subscriberCount)} Subscribers`}</p>
                    <p>{`${compact(videoCount)} Videos`}</p>
                </div>
            </div>
        </div>


        {
            channel.userId === currentUser?.id ? (
                <Link href={"/studio"}>
                    <Button type="rounded-dark">Manage Videos</Button>
                </Link>
            ) : (
                <div>Subscribe</div>
            )
        }


    </div>
  )
}

export default ChannelHeader
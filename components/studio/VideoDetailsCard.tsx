"use client";

import { Video } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import dayjs from "@/vendor/dayjs";
import { compact } from "@/utilities/Num";
import { MdDelete } from "react-icons/md";

interface VideoDetailsCardProps {
  video: Video;
}

const VideoDetailsCard: React.FC<VideoDetailsCardProps> = ({ video }) => {
  const router = useRouter();

  const likeFraction = video.likeCount / (video.likeCount + video.dislikeCount);

  const handleDeleteVideo = useCallback(() => {
    if (confirm("Are you sure you want to delete this video ?")) {
      axios
        .delete(`${process.env.NEXTAUTH_URL}/api/videos/${video.id}`)
        .then(() => {
          toast.success("Video Deleted");
          router.refresh();
        })
        .catch(() => toast.error("Failed to delete video"));
    }
  }, [video.id, router]);

  return (
    <div
      key={video.id}
      className="flex gap-6 justify-between items-center bg-neutral-800 p-4 rounded-lg w-full"
    >
      <Link href={`video/${video.id}`}>
        <Image
          src={video.thumbnailSrc}
          className="aspect-video"
          alt={`${video.title} thumbnail`}
          height={100}
          width={100}
        />
      </Link>

      <div className="flex flex-col ">
        <p className="text-sm">
          {dayjs(video.createdAt).format("MMM D, YYYY")}
        </p>
        <p className="text-sm text-neutral-400">Published</p>
      </div>

      <div className="flex flex-col">
        <p>{compact(video.viewCount)}</p>
        <p className="text-sm text-neutral-400">Views</p>
      </div>

      <div className="flex flex-col">
        <p className="text-[12px] md:text-sm">
          {likeFraction ? `${likeFraction * 100} %` : "-"}
        </p>
        <p className="text-sm text-neutral-400">{video.likeCount} Likes</p>
      </div>

      <MdDelete
        className="h-6 w-6 cursor-pointer"
        onClick={handleDeleteVideo}
      />
    </div>
  );
};

export default VideoDetailsCard;

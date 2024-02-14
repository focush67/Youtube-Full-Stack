"use client";

import { Video } from "@prisma/client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import dayjs from "@/vendor/dayjs";
import { compact } from "@/utilities/Num";
import { MdDelete, MdEdit } from "react-icons/md";
import EditModal from "../shared/Modals/edit-video";

interface VideoDetailsCardProps {
  video: Video;
}

const VideoDetailsCard: React.FC<VideoDetailsCardProps> = ({ video }) => {
  const router = useRouter();
  const [edit, setEdit] = useState(false);

  const likeFraction = video.likeCount / (video.likeCount + video.dislikeCount);

  const handleEditVideoOpen = () => {
    setEdit(true);
  };

  const handleEditVideoClose = () => {
    setEdit(false);
  };

  const handleDeleteVideo = useCallback(() => {
    if (confirm("Are you sure you want to delete this video ?")) {
      axios
        .delete(`/api/videos/${video.id}`)
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
      className="flex gap-3 justify-between items-center bg-neutral-800 p-4 md:p-2 rounded-lg w-full overflow-x-auto"
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

      <div className="flex flex-col items-center">
        <p className="text-sm md:text-md lg:text-lg">
          {dayjs(video.createdAt).format("MMM D, YYYY")}
        </p>
        <p className="text-xs md:text-sm text-neutral-400">Published</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-sm md:text-md lg:text-lg">
          {compact(video.viewCount)}
        </p>
        <p className="text-xs md:text-sm text-neutral-400">Views</p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-xs md:text-sm lg:text-md">
          {likeFraction ? `${likeFraction * 100} %` : "-"}
        </p>
        <p className="text-xs md:text-sm text-neutral-400">
          {video.likeCount} Likes
        </p>
      </div>
      <div className="flex gap-5">
        <MdDelete
          className="h-4 w-4 cursor-pointer"
          onClick={handleDeleteVideo}
        />
        <MdEdit
          className="h-4 w-4 cursor-pointer"
          onClick={handleEditVideoOpen}
        />
        {edit && <EditModal onClose={handleEditVideoClose} video={video} />}
      </div>
    </div>
  );
};

export default VideoDetailsCard;

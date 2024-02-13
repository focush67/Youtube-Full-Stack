"use client";

import { LikedDislikedStatus, useLikeDislike } from "@/hooks/useLikeDislike";
import { compact } from "@/utilities/num";
import { Video } from "@prisma/client";
import {
  MdThumbUp,
  MdOutlineThumbUp,
  MdThumbDown,
  MdOutlineThumbDown,
} from "react-icons/md";
interface LikeDislikeButtonProps {
  video: Video;
}
const LikeDislikeButton: React.FC<LikeDislikeButtonProps> = ({ video }) => {
  const { status, toggleLikeDislike } = useLikeDislike({ videoId: video.id });
  return (
    <div
      className={`flex items-center gap-2 bg-neutral-800 rounded-full px-3 sm:px-3 py-2 text-white font-medium`}
    >
      <button
        className="pr-3 border-r-2 border-neutral-600 flex items-center gap-1"
        onClick={() => toggleLikeDislike("Like")}
      >
        {status === LikedDislikedStatus.Liked ? (
          <MdThumbUp className="w-6 h-6" />
        ) : (
          <MdOutlineThumbUp className="h-6 w-6" />
        )}
        <p>{compact(video.likeCount)}</p>
      </button>

      <button className="pl-2" onClick={() => toggleLikeDislike("Dislike")}>
        {status === LikedDislikedStatus.Disliked ? (
          <MdThumbDown className="h-6 w-6" />
        ) : (
          <MdOutlineThumbDown className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default LikeDislikeButton;

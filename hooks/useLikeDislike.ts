import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserState } from "@/redux/store";
import {
  addDislike,
  addLike,
  removeDisLike,
  removeLike,
} from "@/redux/slices/current-user";
interface UseLikeDislikeProps {
  videoId: string;
}

export enum LikedDislikedStatus {
  Liked = 1,
  Disliked = 2,
  None = 3,
}

export const useLikeDislike = ({ videoId }: UseLikeDislikeProps) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUserState);
  const router = useRouter();

  const status = useMemo(() => {
    if (!currentUser || !videoId) return false;

    const likeVideosIds = currentUser.likedVideoIds || [];
    const dislikeVideosIds = currentUser.dislikedVideoIds || [];

    if (likeVideosIds.includes(videoId)) {
      return LikedDislikedStatus.Liked;
    } else if (dislikeVideosIds.includes(videoId)) {
      return LikedDislikedStatus.Disliked;
    } else {
      return LikedDislikedStatus.None;
    }
  }, [currentUser, videoId]);

  const toggleLikeDislike = useCallback(
    async (action: "Like" | "Dislike") => {
      if (!currentUser) {
        alert("Please Login to continue");
        return;
      } else if (!videoId) return;

      try {
        if (action === "Like") {
          switch (status) {
            case LikedDislikedStatus.Liked: // If the video is already liked , delete the like
              dispatch(removeLike({ id: videoId }));
              await axios.delete(`/api/videos/${videoId}/like`);

              break;

            case LikedDislikedStatus.Disliked: // If the video is disliked , remove the dislike and then add the like
              dispatch(removeDisLike({ id: videoId }));
              await axios.delete(`/api/videos/${videoId}/dislike`);
              dispatch(addLike({ id: videoId }));
              await axios.post(`/api/videos/${videoId}/like`);

              break;

            default: // If the video is neither liked nor disliked , normally add a like
              dispatch(addLike({ id: videoId }));
              await axios.post(`/api/videos/${videoId}/like`);

              break;
          }
        } else {
          switch (status) {
            case LikedDislikedStatus.Liked: // If the video is liked , remove the like and add a dislike
              dispatch(removeLike({ id: videoId }));
              await axios.delete(`/api/videos/${videoId}/like`);

              dispatch(addDislike({ id: videoId }));
              await axios.post(`/api/videos/${videoId}/dislike`);

              break;

            case LikedDislikedStatus.Disliked: // If the video is already disliked , remove the dislike
              dispatch(removeDisLike({ id: videoId }));
              axios.delete(`/api/videos/${videoId}/dislike`);

              break;

            default: // If the video is neither liked nor disliked , simply add a dislike
              dispatch(addDislike({ id: videoId }));
              await axios.post(`/api/videos/${videoId}/dislike`);

              break;
          }
        }

        router.refresh();
        toast.success(`Success`);
      } catch (error: any) {
        toast.error("Some error occured");
      }
    },
    [currentUser, videoId, LikedDislikedStatus, router]
  );

  return {
    status,
    toggleLikeDislike,
  };
};

import { CurrentUserContext } from "@/contexts/CurrentUserContext";
import { useCallback, useContext, useMemo } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";
interface UseLikeDislikeProps {
  videoId: string;
}

export enum LikedDislikedStatus {
  Liked = 1,
  Disliked = 2,
  None = 3,
}

export const useLikeDislike = ({ videoId }: UseLikeDislikeProps) => {
  const currentUser = useContext(CurrentUserContext);
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
            case LikedDislikedStatus.Liked:
              await axios.delete(
                `${process.env.NEXTAUTH_URL}/api/videos/${videoId}/like`
              );
              break;

            case LikedDislikedStatus.Disliked:
              axios
                .delete(
                  `${process.env.NEXTAUTH_URL}/api/videos/${videoId}/dislike`
                )
                .then(() => {
                  axios.post(
                    `${process.env.NEXTAUTH_URL}/api/videos/${videoId}/like`
                  );
                });
              break;

            default:
              await axios.post(
                `${process.env.NEXTAUTH_URL}/api/videos/${videoId}/like`
              );
              break;
          }
        } else {
          switch (status) {
            case LikedDislikedStatus.Liked:
              axios
                .delete(
                  `${process.env.NEXTAUTH_URL}/api/videos/${videoId}/like`
                )
                .then(() => {
                  axios.post(
                    `${process.env.NEXTAUTH_URL}/api/videos/${videoId}/dislike`
                  );
                });
              break;

            case LikedDislikedStatus.Disliked:
              axios.delete(
                `${process.env.NEXTAUTH_URL}/api/videos/${videoId}/dislike`
              );
              break;

            default:
              await axios.post(
                `${process.env.NEXTAUTH_URL}/api/videos/${videoId}/dislike`
              );
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

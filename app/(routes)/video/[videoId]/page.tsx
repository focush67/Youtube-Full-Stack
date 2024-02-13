import VideoCard from "@/components/shared/video-card";
import CommentRegion from "@/components/video/comment-section/comment-region";
import Description from "@/components/video/description";
import LikeSubscribe from "@/components/video/like-and-subscribe.tsx/LikeSubscribe";
import VideoPlayer from "@/components/video/video-player";
import getChannelById from "@/services/getChannelById";
import getCommentsByVideoId from "@/services/getCommentsByVideoId";
import { getRecommendedVideos } from "@/services/getRecommendedVideos";
import increaseVideoViewCount from "@/services/increaseVideoViewCount";

interface VideoPageProps {
  videoId: string;
}
export default async function VideoPage({
  params,
}: {
  params: VideoPageProps;
}) {
  const { videoId } = params;
  const video = await increaseVideoViewCount({ videoId });
  const channel = await getChannelById({ channelId: video?.channelId });
  const comments = await getCommentsByVideoId({ videoId });
  const recommendedVideos = await getRecommendedVideos({ video });

  return video && channel && comments ? (
    <div className="flex flex-col lg:flex-row mx-3 mt-2 gap-4">
      <div className="w-full lg:w-3/4 flex flex-col gap-4">
        <VideoPlayer videoSrc={video.videoSrc} />
        <h1 className="md:text-xl lg:text-2xl font-medium break-all">
          {video.title}
        </h1>
        <LikeSubscribe video={video} channel={channel!} />
        <Description video={video} />
        <CommentRegion comments={comments!} videoId={video.id} />
      </div>

      <div className="w-full lg:w-1/4 flex flex-col gap-4 pb-4">
        {recommendedVideos && recommendedVideos.length
          ? recommendedVideos.map((video) => {
              return (
                <VideoCard
                  key={video.id}
                  isVertical={false}
                  video={video}
                  channel={video.channel}
                  channelAvatar
                />
              );
            })
          : null}
      </div>
    </div>
  ) : (
    <h1>Video not found</h1>
  );
}

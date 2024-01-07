import VideoCard from "@/components/shared/VideoCard";
import CommentRegion from "@/components/video/CommentSection/CommentRegion";
import Description from "@/components/video/Description";
import LikeSubscribe from "@/components/video/LikeAndSubscribe/LikeSubscribe";
import VideoPlayer from "@/components/video/VideoPlayer";
import getChannelById from "@/getChannelById";
import getCommentsByVideoId from "@/getCommentsByVideoId";
import { getRecommendedVideos } from "@/getRecommendedVideos";
import increaseVideoViewCount from "@/increaseVideoViewCount";

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
  console.log("Recommended Videos: ", recommendedVideos);
  return video && channel && comments ? (
    <div className="flex flex-col lg:flex-row mx-6 mt-2 gap-4">
      <div className="w-full lg:w-3/4 flex flex-col gap-4">
        <VideoPlayer videoSrc={video.videoSrc} />
        <h1 className="text-2xl font-medium break-all">{video.title}</h1>
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

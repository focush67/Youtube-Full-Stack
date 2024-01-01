import CommentRegion from "@/components/video/CommentSection/CommentRegion";
import Description from "@/components/video/Description";
import LikeSubscribe from "@/components/video/LikeAndSubscribe/LikeSubscribe";
import VideoPlayer from "@/components/video/VideoPlayer";
import getChannelById from "@/getChannelById";
import getCommentsByVideoId from "@/getCommentsByVideoId";
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
  return video ? (
    <div className="flex flex-col lg:flex-row mx-6 mt-2 gap-4">
      <div className="w-full lg:w-3/4 flex flex-col gap-4">
        <VideoPlayer videoSrc={video.videoSrc} />
        <h1 className="text-2xl font-medium break-all">{video.title}</h1>
        <LikeSubscribe video={video} channel={channel!} />
        <Description video={video} />
        <CommentRegion comments={comments!} videoId={videoId} />
      </div>

      <div className="w-full lg:w-1/4 flex flex-col gap-4 pb-4"></div>
    </div>
  ) : (
    <h1>Video not found</h1>
  );
}

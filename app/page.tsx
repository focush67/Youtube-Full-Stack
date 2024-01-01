import getTrendingVideos from "@/getTrendingVideos";
import VideoCard from "@/components/shared/VideoCard";

export default async function Home() {
  const trendingVideos = await getTrendingVideos();
  return (
    <div className="mx-12 sm:mx-24 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {trendingVideos && trendingVideos.length
        ? trendingVideos.map((video) => {
            return (
              <VideoCard
                key={video.id}
                video={video}
                channel={video.channel}
                channelAvatar
              />
            );
          })
        : "No videos were found"}
    </div>
  );
}

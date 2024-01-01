import AnalyticsSummary from "@/components/studio/AnalyticsSummary";
import VideoDetailsCard from "@/components/studio/VideoDetailsCard";
import getCurrentChannnel from "@/getCurrentChannel";
import getVideosByChannelId from "@/getVideosByChannelld";
import React from "react";

const StudioPage = async () => {
  const currentChannel = await getCurrentChannnel();
  const videos = await getVideosByChannelId({ channelId: currentChannel?.id });
  return (
    <div className="flex flex-col w-full h-full p-8">
      <AnalyticsSummary videos={videos!} />
      <div className="flex flex-col gap-4 mt-8">
        <h2 className="text-2xl">Videos</h2>
        {videos && videos.length
          ? videos.map((video) => {
              return <VideoDetailsCard video={video} key={video.id} />;
            })
          : "Upload Videos"}
      </div>
    </div>
  );
};

export default StudioPage;

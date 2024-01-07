"use client";

import { Video, Channel } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import VideoCard from "@/components/shared/VideoCard";

export default function SearchPage() {
  const params = useSearchParams();
  const searchQuery = params.get("searchQuery");

  const [videos, setVideos] = useState<(Video & { channel: Channel })[]>([]);

  useEffect(() => {
    axios
      .get("/api/videos", { params: { searchQuery } })
      .then((response) => {
        setVideos(response.data as unknown as (Video & { channel: Channel })[]);
      })
      .catch((error) => toast.error(error.message));
  }, [searchQuery]);

  return (
    <div className="w-4/5 mx-auto flex flex-col gap-4 items-center pb-4">
      {videos.length
        ? videos.map((video) => {
            return (
              <VideoCard
                key={video.id}
                isVertical={false}
                video={video}
                channel={video.channel}
                includeDescription
                channelAvatar
              />
            );
          })
        : "No videos were found"}
    </div>
  );
}

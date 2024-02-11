"use client";

import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { CurrentChannelContext } from "@/contexts/CurrentChannelContext";
import { Video } from "@prisma/client";
import { useContext, useMemo } from "react";
import UserAvatar, { UserAvatarSize } from "../shared/UserAvatar";
import AnalyticsSummaryItems from "./AnalyticsSummaryItems";
import { compact } from "@/utilities/Num";

interface AnalyticsSummaryProps {
  videos: Video[];
}

const AnalyticsSummary: React.FC<AnalyticsSummaryProps> = ({ videos }) => {
  useProtectedRoute();

  const currentChannel = useContext(CurrentChannelContext);

  const viewsCount = useMemo(
    () => videos.reduce((totalViews, video) => totalViews + video.viewCount, 0),
    [videos]
  );

  return (
    <div className="mx-auto flex items-center gap-4">
      <UserAvatar
        size={UserAvatarSize.lg}
        imageSrc={currentChannel?.imageSrc!}
        className="hidden md:inline"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <AnalyticsSummaryItems
          value={currentChannel?.name!}
          subtitle={`@${currentChannel?.handle}`}
        />

        <AnalyticsSummaryItems
          value={compact(currentChannel?.subscriberCount)}
          subtitle="Subscribers"
        />

        <AnalyticsSummaryItems value={compact(viewsCount!)} subtitle="Views" />

        <AnalyticsSummaryItems
          value={compact(videos.length)}
          subtitle="Videos"
        />
      </div>
    </div>
  );
};

export default AnalyticsSummary;

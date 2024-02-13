"use client";

import { useProtectedRoute } from "@/hooks/useProtectedRoute";
import { Video } from "@prisma/client";
import { useMemo } from "react";
import UserAvatar, { UserAvatarSize } from "../shared/user-avatar";
import AnalyticsSummaryItems from "./analytics-summary-items";
import { compact } from "@/utilities/num";
import { useSelector } from "react-redux";
import { getCurrentChannelState } from "@/redux/store";

interface AnalyticsSummaryProps {
  videos: Video[];
}

const AnalyticsSummary: React.FC<AnalyticsSummaryProps> = ({ videos }) => {
  useProtectedRoute();

  const currentChannel = useSelector(getCurrentChannelState);

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

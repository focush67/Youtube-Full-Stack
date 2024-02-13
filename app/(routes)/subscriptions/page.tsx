import Subscriptions from "@/components/subscriptions/subscriptions";
import getVideosOfSubscriptions from "@/services/getVideosOfSubscriptions";

export default async function SubscriptionsPage() {
  const subscriptionVideos = await getVideosOfSubscriptions();

  return subscriptionVideos.length ? (
    <Subscriptions videos={subscriptionVideos} />
  ) : (
    "No videos available"
  );
}

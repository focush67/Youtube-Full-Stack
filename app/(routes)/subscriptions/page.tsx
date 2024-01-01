import Subscriptions from "@/components/subscriptions/Subscriptions";
import getVideosOfSubscriptions from "@/getVideosOfSubscriptions";

export default async function SubscriptionsPage() {
  const subscriptionVideos = await getVideosOfSubscriptions();

  return subscriptionVideos.length ? (
    <Subscriptions videos={subscriptionVideos} />
  ) : (
    "No videos available"
  );
}

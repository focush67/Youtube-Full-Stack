import prisma from "../vendor/database";
import { Channel, Video } from "@prisma/client";

export default async function getTrendingVideos(): Promise<
  (Video & { channel: Channel })[]
> {
  try {
    const startingDate = new Date();
    startingDate.setMonth(startingDate.getMonth() - 1);

    const videos = await prisma.video.findMany({
      include: {
        channel: true,
      },
      where: {
        createdAt: {
          gte: startingDate,
        },
      },
      orderBy: [
        {
          viewCount: "desc",
        },
      ],
      take: 50,
    });

    return videos;
  } catch (error: any) {
    throw new Error(error);
  }
}

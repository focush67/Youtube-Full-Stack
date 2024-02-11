import getCurrentUser from "@/services/getCurrentUser";
import prisma from "@/vendor/database";
import { NextResponse } from "next/server";

export interface IParams {
  videoId: string;
}

export async function POST(_: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();
  const { videoId } = params;

  if (!currentUser || !videoId) {
    return NextResponse.error();
  }

  const likedVideosIds = currentUser.likedVideoIds || [];

  likedVideosIds.push(videoId);

  const video = await prisma.video.update({
    where: {
      id: videoId,
    },
    data: {
      likeCount: {
        increment: 1,
      },
    },
  });

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      likedVideoIds: likedVideosIds,
    },
  });

  return NextResponse.json({ user, video });
}

export async function DELETE(_: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();
  const { videoId } = params;

  if (!videoId || !currentUser) {
    return NextResponse.error();
  }

  let likedVideosIds = currentUser.likedVideoIds?.filter(
    (video) => video !== videoId
  );

  const video = await prisma.video.update({
    where: {
      id: videoId,
    },
    data: {
      likeCount: {
        decrement: 1,
      },
    },
  });

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      likedVideoIds: likedVideosIds,
    },
  });

  return NextResponse.json({ user, video });
}

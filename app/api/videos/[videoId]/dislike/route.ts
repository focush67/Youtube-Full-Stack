import getCurrentUser from "@/getCurrentUser";
import prisma from "@/vendor/database";
import { NextResponse } from "next/server";
import { IParams } from "../like/route";

export async function POST(_: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();
  const { videoId } = params;

  if (!videoId || !currentUser) {
    return NextResponse.error();
  }

  let dislikedVideosIds = currentUser.dislikedVideoIds || [];
  dislikedVideosIds.push(videoId);

  const video = await prisma.video.update({
    where: {
      id: videoId,
    },
    data: {
      dislikeCount: {
        increment: 1,
      },
    },
  });

  const user = await prisma.user.update({
    where: {
      id: currentUser?.id,
    },
    data: {
      dislikedVideoIds: dislikedVideosIds,
    },
  });

  return NextResponse.json({ video, user });
}

export async function DELETE(_: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();
  const { videoId } = params;

  if (!videoId || !currentUser) {
    return NextResponse.error();
  }

  let dislikedVideosIds = currentUser.dislikedVideoIds?.filter(
    (video) => video !== videoId
  );

  const video = await prisma.video.update({
    where: {
      id: videoId,
    },
    data: {
      dislikeCount: {
        decrement: 1,
      },
    },
  });

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      dislikedVideoIds: dislikedVideosIds,
    },
  });

  return NextResponse.json({ user, video });
}

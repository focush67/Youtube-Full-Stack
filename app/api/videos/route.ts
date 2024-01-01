import getCurrentChannnel from "@/getCurrentChannel";
import prisma from "@/vendor/database";
import { NextResponse } from "next/server";
import { IParams } from "./[videoId]/like/route";

export async function POST(request: Request) {
  const currentChannel = await getCurrentChannnel();
  if (!currentChannel) {
    return NextResponse.error();
  }

  const { id, title, description, videoSrc, thumbnailSrc } =
    await request.json();

  const newVideoCreated = await prisma.video.create({
    data: {
      title,
      description,
      videoSrc,
      thumbnailSrc,
      id,
      channelId: currentChannel?.id,
    },
  });

  return NextResponse.json(newVideoCreated);
}

export async function DELETE(_: Request, { params }: { params: IParams }) {
  console.log(`Delete request for video ${params.videoId} received at backend`);
  return;
  const currentChannel = await getCurrentChannnel();
  if (!currentChannel) {
    return NextResponse.error();
  }

  const video = await prisma.video.delete({
    where: {
      id: params.videoId,
    },
  });

  return NextResponse.json(video);
}

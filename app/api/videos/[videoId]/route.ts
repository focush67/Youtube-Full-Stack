import getCurrentChannnel from "@/services/getCurrentChannel";
import prisma from "@/vendor/database";
import { NextResponse } from "next/server";
import { IParams } from "./like/route";

export async function DELETE(_: Request, { params }: { params: IParams }) {
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

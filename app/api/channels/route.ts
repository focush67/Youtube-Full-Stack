import getCurrentUser from "@/services/getCurrentUser";
import prisma from "@/vendor/database";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.error();
  }

  const { name, handle, imageSrc } = await request.json();
  const channel = await prisma.channel.create({
    data: {
      name,
      handle,
      imageSrc,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(channel);
}
export async function GET() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({
      message: "Unauthorised channel request get",
    });
  }

  const channel = await prisma.channel.findUnique({
    where: {
      userId: currentUser.id,
    },
  });

  if (!channel) {
    return NextResponse.json({
      message: "Channel not found for current user",
    });
  }

  return NextResponse.json({
    message: "Returning channel",
    channel: channel,
  });
}

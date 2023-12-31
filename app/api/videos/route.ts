import getCurrentChannnel from "@/getCurrentChannel";
import prisma from "@/vendor/database";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    const currentChannel = await getCurrentChannnel();
    if(!currentChannel){
        return NextResponse.error();
    }

    const {id,title,description,videoSrc,thumbnailSrc} = await request.json();

    const newVideoCreated = await prisma.video.create({
        data:{
            title,description,videoSrc,thumbnailSrc,id,channelId: currentChannel?.id
        }
    })

    return NextResponse.json(newVideoCreated);
}
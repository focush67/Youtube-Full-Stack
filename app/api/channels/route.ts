import getCurrentUser from "@/getCurrentUser";
import prisma from "@/vendor/database";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    const currentUser = await getCurrentUser();
    if(!currentUser){
        return NextResponse.error();
    }

    const {name,handle,imageSrc} = await request.json();
    const channel = await prisma.channel.create({
        data:{
            name,handle,imageSrc,userId:currentUser.id
        }
    })

    return NextResponse.json(channel)
}
export async function GET(){

}
import { Channel } from "@prisma/client";
import getCurrentUser from "./getCurrentUser";
import prisma from "./vendor/database";
export default async function getCurrentChannnel():Promise<Channel | null>{
    try {
        const user = await getCurrentUser();
        const query:any = {};

        if(user?.id){
            query.userId = user?.id;
        }
        else{
            return null;
        }

        const currentUserChannel = await prisma.channel.findFirst({
            where: query
        });

        return currentUserChannel;
    } catch (error:any) {
        throw new Error(error);
    }
}
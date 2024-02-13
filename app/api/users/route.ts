import { getServerSession } from "next-auth";
import prisma from "@/vendor/database";

export const GET = async (request: Request) => {
  const session = await getServerSession();
  if (!session) {
    console.log("No session found at server");
    return Response.json({
      message: "Session absent",
      status: 404,
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user?.email!,
    },
  });

  return Response.json({
    message: "Returning session",
    status: 201,
    user: user,
  });
};

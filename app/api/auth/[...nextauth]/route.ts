import NextAuth from "next-auth/next";
import { authOptions } from "@/utilities/auth-exports";
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

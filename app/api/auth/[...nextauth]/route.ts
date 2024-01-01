import NextAuth from "next-auth/next";
import { authOptions } from "@/utilities/authExports";
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

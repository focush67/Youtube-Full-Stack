"use client";
import { MdOutlineAccountCircle } from "react-icons/md";
import {signIn} from "next-auth/react";

const loginWithGoogle = async() => {
    await signIn("google");
}
const SignIn = () => {
  return (
    <button className="flex gap-1 items-center border-[1px] border-slate-700 rounded-full overflow-hidden px-2 py-1.5 text-blue-400 cursor-pointer" onClick={loginWithGoogle}><MdOutlineAccountCircle className="h-6 2-6"/>Login</button>
  )
}

export default SignIn
"use client";

import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <Link href={"/"}>
        <Image src={"/images/icon.svg"} alt={"Logo"} className="hidden cursor-pointer mx-2 sm:block" height={10} width={30} />
    </Link>
  )
}

export default Logo
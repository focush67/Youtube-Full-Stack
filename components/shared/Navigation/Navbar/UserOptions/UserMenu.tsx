"use client";

import { signOut } from "next-auth/react";
import MenuItems from "./MenuItems";
import {PiUserSquareFill,PiYoutubeLogo,PiSignOut} from "react-icons/pi";
interface UserMenuProps {
    onClose: () => void
}
const UserMenu:React.FC<UserMenuProps> = ({onClose}) => {
  return (
    <>
        <div className="h-screen w-screen fixed z-30" onClick={onClose} />
        <div className="absolute rounded-md shadow-md w-72 bg-zinc-800 right-2 top-16 text-sm flex flex-col overflow-hidden z-40">
            <MenuItems logo={<PiUserSquareFill className="h-7 w-7 mr-4"/>} label={"Your Channel"}   />

            <MenuItems logo={<PiYoutubeLogo className="h-7 w-7 mr-4"/>} label={"Youtube Studio"}   />

            <MenuItems logo={<PiSignOut className="h-7 w-7 mr-4"/>} label={"Signout"} onClick={() => {signOut() ,onClose}}/>
        </div>
    </>
  )
}

export default UserMenu
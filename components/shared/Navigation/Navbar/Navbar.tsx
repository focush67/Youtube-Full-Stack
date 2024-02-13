import React from "react";
import NavigationHeader from "../navigation-header";
import Search from "./search";
import UserOptions from "./user-options/user-options";
const Navbar = () => {
  return (
    <div className="fixed w-full bg-stone-950 z-[20] h-16 px-2 flex flex-row justify-between items-center">
      <NavigationHeader />
      <Search />
      <UserOptions />
    </div>
  );
};

export default Navbar;

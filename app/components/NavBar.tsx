import React from "react";
import { NavLogo } from "./NavLogo";
import { NavMenu } from "./NavMenu";

export const NavBar = () => {
  return (
    <header className="fixed z-50 flex h-max w-full items-center justify-center bg-black bg-opacity-10 px-7 py-1 shadow-md backdrop-blur-md md:px-24">
      <NavLogo className="flex flex-grow justify-center" />
      <NavMenu className="" />
    </header>
  );
};

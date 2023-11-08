import React from "react";
import { NavLogo } from "./NavLogo";
import { NavMenu } from "./NavMenu";

export default function NavBar() {
  return (
    <header className="fixed z-50 flex h-max w-full items-center justify-between bg-black bg-opacity-10 px-7 py-1 shadow-md backdrop-blur-md md:px-24">
      <NavLogo className="flex justify-center md:flex-grow" />
      <NavMenu className="" />
    </header>
  );
}

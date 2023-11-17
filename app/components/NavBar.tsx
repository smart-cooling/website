"use client";

import React, { createContext, useState } from "react";
import { NavLogo } from "./NavLogo";
import NavMenu from "./NavMenu";

export const NavContext = createContext(null as any);

export default function NavBar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <NavContext.Provider value={{ isActive, setIsActive }}>
      <header
        className={`fixed z-50 w-full bg-black bg-opacity-10 px-7 py-1 shadow-md backdrop-blur-md transition-all duration-200 md:px-24 ${
          isActive && "bg bg-w-1 bg-opacity-100"
        }`}
      >
        <div className="relative flex h-max items-center justify-between">
          <NavLogo
            className="flex justify-center md:flex-grow"
            src={`website/${isActive ? "logo-color" : "logo-white"}`}
          />
          <NavMenu className="" isActive={isActive} />
        </div>
      </header>
    </NavContext.Provider>
  );
}

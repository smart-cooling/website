"use client";

import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

type props = {
  className?: string;
};

export const NavMenu = ({ className }: props) => {
  const [isActive, setIsActive] = useState(false);

  console.log(isActive);

  return (
    <div>
      <button
        className="cursor-pointer hover:scale-105"
        onClick={() => setIsActive(!isActive)}
      >
        <Bars3Icon
          className={`h-12 w-12 text-w-1 transition-all duration-500 ${
            isActive && "-rotate-90"
          }`}
        />
      </button>
      <ul
        className={`align-center absolute right-7 w-max flex-col justify-center overflow-hidden rounded-md p-1 text-lg shadow-lg backdrop-blur-sm transition-all duration-700 md:right-24 ${
          isActive ? "h-24 opacity-100" : "h-0 opacity-0"
        }`}
      >
        <li>Sobre nos</li>
        <li>Portfolio</li>
        <li>Contato</li>
      </ul>
    </div>
  );
};

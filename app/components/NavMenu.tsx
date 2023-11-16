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
          className={`w-10 text-w-1 transition-all duration-500 md:w-12 ${
            isActive && "-rotate-90"
          }`}
        />
      </button>
      <ul
        className={`absolute right-7 flex w-max flex-col justify-evenly gap-2 overflow-hidden rounded-xl bg-black bg-opacity-5 p-3 text-xl font-semibold shadow-lg backdrop-blur-md transition-all duration-700 md:right-24 ${
          isActive ? "h-32 opacity-100" : "h-0 opacity-0"
        }`}
        style={{ WebkitBackdropFilter: "blur(5px)" }}
      >
        <li>Sobre nos</li>
        <li>Portfolio</li>
        <li>Contato</li>
      </ul>
    </div>
  );
};

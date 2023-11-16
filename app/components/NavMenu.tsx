"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/solid";

type props = {
  className?: string;
};

export const NavMenu = ({ className }: props) => {
  const [isActive, setIsActive] = useState(false);

  console.log(isActive);

  const pathName = usePathname();

  console.log(pathName);

  return (
    <div
      className={`absolute right-0 top-1/3 flex flex-col items-end overflow-hidden transition-all duration-700 ${
        pathName === "/terms" ? "hidden" : ""
      } ${isActive ? "h-44" : "h-10"}`}
    >
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
        className={`flex w-max flex-col justify-evenly gap-2 rounded-xl bg-black bg-opacity-5 p-3 text-xl font-semibold shadow-lg backdrop-blur-md`}
        style={{ WebkitBackdropFilter: "blur(5px)" }}
      >
        <li>
          <button>Sobre nos</button>
        </li>
        <li>
          <button>Portfolio</button>
        </li>
        <li>
          <button>Contato</button>
        </li>
      </ul>
    </div>
  );
};

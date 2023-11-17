"use client";

import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { NavContext } from "./NavBar";

type props = {
  className?: string;
  isActive?: boolean;
};

const scroll = (id: string, yOffset: number) => {
  const element = document.getElementById(id);
  const y = element!.getBoundingClientRect().top + window.scrollY + yOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
};

export default function NavMenu({ className, isActive }: props) {
  const pathName = usePathname();

  const { setIsActive } = useContext(NavContext);

  return (
    <div
      className={`absolute right-0 top-1/4 z-20 flex flex-col items-end gap-1 overflow-hidden transition-all duration-200 ${
        pathName === "/terms" ? "hidden" : " "
      } ${isActive ? "h-60" : "h-10"}`}
    >
      <button
        className="cursor-pointer hover:scale-105"
        onClick={() => setIsActive(!isActive)}
      >
        <Bars3Icon
          className={`w-10 transition-all duration-200 md:w-12 ${
            isActive ? "-rotate-90 text-o-2" : "text-w-1"
          }`}
        />
      </button>
      <ul
        className={`flex w-max flex-col justify-evenly gap-2 rounded-lg p-3 text-xl font-semibold text-b-2 transition-all duration-75 ${
          isActive && "bg-w-1"
        }`}
      >
        <li className="hover:text-o-2">
          <button
            onClick={() => {
              scroll("about", -100);
            }}
          >
            Sobre nos
          </button>
        </li>
        <li className="hover:text-o-2">
          <button
            onClick={() => {
              scroll("portfolio", -100);
            }}
          >
            Portfólio
          </button>
        </li>
        <li className="hover:text-o-2">
          <button
            onClick={() => {
              scroll("contact", -100);
            }}
          >
            Contato
          </button>
        </li>
      </ul>
    </div>
  );
}

"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

type props = {
  className?: string;
};

export const NavLogo = ({ className }: props) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <button
        className={`cursor-pointer transition-all hover:scale-105`}
        onClick={handleClick}
      >
        <Link href={"/"}>
          <CldImage
            src={`website/logo-w`}
            width={"1280"}
            height={"720"}
            alt="Smart Cooling Logo"
            className="h-auto w-40 md:w-52"
          />
        </Link>
      </button>
    </div>
  );
};

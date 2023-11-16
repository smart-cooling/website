"use client";

import { CldImage } from "next-cloudinary";
import React from "react";

type props = {
  title: string;
  icon: string;
};

export default function SectionTitle({ title, icon = "flake" }: props) {
  return (
    <div className="mb-14 flex items-center gap-3 text-w-1">
      <CldImage
        src={`website/icons/icon-${icon}`}
        alt={`icon-${icon}`}
        width={50}
        height={50}
        className="h-8 w-8 md:h-12 md:w-12"
      />
      <h2 className="text-3xl font-bold md:text-5xl">{title}</h2>
    </div>
  );
}

"use client";

import { CldImage } from "next-cloudinary";
import React from "react";

export default function SunflakeBar() {
  return (
    <div className="flex w-full justify-center bg-b-4">
      <CldImage
        src="smart-cooling-website/icons/icon-sunflake"
        alt="icon-sunflake"
        height={100}
        width={100}
        className="h-14 w-14 md:h-28 md:w-28"
      />
    </div>
  );
}

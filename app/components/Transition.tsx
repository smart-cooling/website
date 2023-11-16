"use client";

import React from "react";
import { CldImage } from "next-cloudinary";

type props = {
  className?: string;
  asset: string;
};

export const Transition = ({ className, asset }: props) => {
  return (
    <CldImage
      src={`website/${asset}`}
      width={1920}
      height={0}
      alt=""
      className={`${className} absolute bottom-0 left-0 h-auto w-screen`}
    />
  );
};

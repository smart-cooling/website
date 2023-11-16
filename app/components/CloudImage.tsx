"use client";

import React from "react";
import { CldImage } from "next-cloudinary";

type props = {
  src: string;
  alt?: string;
  height: number;
  width: number;
  className?: string;
};

export default function CloudImage({
  src,
  alt,
  height,
  width,
  className,
}: props) {
  return (
    <CldImage
      src={src}
      alt={`${alt}`}
      height={height}
      width={width}
      className={className}
    ></CldImage>
  );
}

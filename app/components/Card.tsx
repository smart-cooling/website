"use client";

import { CldImage } from "next-cloudinary";
import React, { ReactNode } from "react";

type props = {
  icon?: string;
  title?: string;
  className?: string;
  children?: ReactNode;
};

export default function Card({ icon, title, className, children }: props) {
  return (
    <li
      className={`flex w-96 flex-col justify-center rounded-3xl px-7 py-10 ${className}`}
    >
      <div className="mb-10 flex items-center justify-center gap-3">
        <CldImage
          src={`website/icons/icon-${icon}`}
          alt={`icon-${icon}`}
          height={60}
          width={60}
          className="h-14 w-auto"
        />
        <h3 className="text-3xl font-bold text-w-1">{title}</h3>
      </div>
      <div>{children}</div>
    </li>
  );
}

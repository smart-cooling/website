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
      className={`flex max-w-md flex-col justify-center rounded-3xl px-7 py-10 ${className}`}
    >
      <div className="mb-10 flex justify-center">
        <CldImage
          src={`smart-cooling-website/icons/icon-${icon}`}
          alt={`icon-${icon}`}
          height={60}
          width={60}
        />
        <h3>{title}</h3>
      </div>
      <div>{children}</div>
    </li>
  );
}

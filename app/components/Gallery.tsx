"use client";

import React, { ReactNode } from "react";
import { CldImage } from "next-cloudinary";
// npm i --save-dev @types/react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Gallery() {
  const itens = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  type customArrowProps = {
    style?: any;
    className?: string;
    onClick?: any;
  };

  function CustomNextArrow({ className, onClick, style }: customArrowProps) {
    return (
      <ChevronRightIcon
        className={`${className}`}
        onClick={onClick}
        style={{ ...style, color: "white" }}
      ></ChevronRightIcon>
    );
  }

  function CustomPrevArrow({ className, onClick, style }: customArrowProps) {
    return (
      <ChevronLeftIcon
        className={`${className}`}
        onClick={onClick}
        style={{ ...style, color: "white" }}
      ></ChevronLeftIcon>
    );
  }

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-20">
      <Slider {...settings}>
        {itens.map((item, index) => (
          <div key={index}>
            <div className="px-4">
              <div className="">
                <CldImage
                  src={`smart-cooling-website/jobs/job-img-${item}`}
                  alt="brand logo"
                  width={1080}
                  height={0}
                  className="center h-full w-full rounded-3xl"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
// npm i --save-dev @types/react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type props = {
  itens: string[];
  settings?: object;
};

export default function BrandsCarousel() {
  const itens = [
    "eletrolux",
    "lg",
    "midea",
    "consul",
    "komeco",
    "bosch",
    "samsung",
  ];

  let settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
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
              <div className="flex h-56 w-full items-center justify-center rounded-3xl bg-w-1/20 p-6 brightness-200 grayscale transition-all duration-300 hover:bg-w-1/80 hover:brightness-100 hover:grayscale-0 max-sm:bg-w-1/80 max-sm:brightness-100 max-sm:grayscale-0">
                <CldImage
                  src={`website/brands/${item}`}
                  alt="brand logo"
                  width={1280}
                  height={720}
                  className="max-h-full w-auto transition-all duration-300"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

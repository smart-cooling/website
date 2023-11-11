"use client";

import React, { ReactNode } from "react";
import { CldImage } from "next-cloudinary";
// npm i --save-dev @types/react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallery() {
  const itens = ["elgin", "gree", "agratto"];

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="mb-20">
      <Slider {...settings}>
        {itens.map((item, index) => (
          <>
            <div className="px-4">
              <div className="h-96 w-full rounded-3xl">
                <CldImage
                  src={`smart-cooling-website/brands/${item}`}
                  alt="brand logo"
                  width={1080}
                  height={0}
                  className="center h-full w-full"
                />
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
}

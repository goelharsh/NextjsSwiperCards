"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../public/hp.png";
import img2 from "../public/huawei.png";
import img3 from "../public/image 96.png";
import img4 from "../public/image 97.png";
import { Swiper as SwiperType } from "swiper";

const PopularMobileBrands = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const swiperItems = [
    { image: img1, title: "Item 1" },
    { image: img2, title: "Item 2" },
    { image: img2, title: "Item 2" },
    { image: img2, title: "Item 2" },
    { image: img3, title: "Item 3" },
    { image: img3, title: "Item 3" },
    { image: img3, title: "Item 3" },
    { image: img3, title: "Item 3" },
    { image: img4, title: "Item 4" },
  ];

  return (
    <div className="relative mb-2">
      <h2 className="text-lg p-2 font-bold">
        Popular Mobile Brands<span>&nbsp;»</span>
      </h2>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        pagination={false}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {swiperItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className=" bg-white w-full h-36 border-gray-300 shadow-lg flex flex-col items-center">
              <img
                src={item.image.src}
                alt={item.title}
                className="w-32 h-28 p-3 object-fit"
              />
              <h3 className="text-center border-t-2 w-[98%]">{item.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularMobileBrands;

"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../public/hp.png";
import img2 from "../public/huawei.png";
import img3 from "../public/image 96.png";
import img4 from "../public/image 97.png";
import { Swiper as SwiperType } from "swiper";

const ProductFinder = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const swiperItems = [
    { image: img1, title: "Mobiles" },
    { image: img2, title: "Laptops" },
    { image: img3, title: "TV" },
    { image: img4, title: "Tables" },
    { image: img4, title: "Smart Watches" },
    { image: img4, title: "Headphones" },
    { image: img4, title: "Cameras" },
    { image: img4, title: "Gaming Consoles" },
    { image: img4, title: "Smart Brands" },
    { image: img4, title: "Speakers" },
    { image: img4, title: "Smart Speakers" },
  ];

  return (
    <div className="relative mb-2">
      <h2 className="text-lg p-2 font-bold">Product Finder with AI</h2>
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
            <div className="bg-white w-full h-24 border-gray-300 shadow-lg flex flex-col items-center">
              <img
                src={item.image.src}
                alt={item.title}
                className="p-1 min-h-[4rem] mb-1 object-fit"
              />
              <h3 className="text-center text-sm pb-1">{item.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductFinder;

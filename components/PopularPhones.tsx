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

const PopularPhones = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const swiperItems = [
    { image: img1, title: "Samsung Galaxy Z Flip6", price: "₹84,000" },
    { image: img2, title: "Huawei P60 Pro", price: "₹95,000" },
    { image: img3, title: "iPhone 14 Pro Max", price: "₹1,39,000" },
    { image: img4, title: "OnePlus 11R", price: "₹45,000" },
  ];

  return (
    <div className="relative mb-2">
      <h2 className="font-semibold text-lg mb-1 p-1">Popular Phones</h2>
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
            <div className="bg-white w-full h-56 border-gray-300 shadow-lg flex flex-col items-center">
              <img
                src={item.image.src}
                alt={item.title}
                className="min-w-[6rem] min-h-[7rem] w-24 h-28 p-3 object-cover"
              />
              <h3 className="text-center text-wrap border-t-2 w-[98%] px-2 font-medium mt-2">
                {item.title}
              </h3>
              <div className="flex gap-1 items-center justify-between px-2 mb-2 py-2 mt-auto w-[90%]">
                <div className="text-gray-600 font-bold text-sm">
                  {item.price}
                </div>
                <button className="bg-red-500 text-white text-sm rounded px-2 w-[1o0%]">
                  Buy
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularPhones;

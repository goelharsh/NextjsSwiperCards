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

const PopularComparison = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const swiperItems = [
    { image: img1, title: "Samsung Galaxy Z Flip6", price: "₹84,000" },
    { image: img2, title: "Huawei P60 Pro", price: "₹95,000" },
    { image: img3, title: "iPhone 14 Pro Max", price: "₹1,39,000" },
    { image: img4, title: "OnePlus 11R", price: "₹45,000" },
  ];

  return (
    <div className="relative mb-2">
      <h2 className="text-lg p-2 font-bold">
        Popular Comparisons<span>&nbsp;»</span>
      </h2>
      <Swiper
        spaceBetween={16}
        slidesPerView={1.7}
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
            <div className="bg-white w-[260px] h-40 border-gray-300 shadow-lg flex flex-col items-center">
              <div className="flex justify-between items-center gap-2">
                <div>
                  <img
                    src={item.image.src}
                    alt={item.title}
                    className="p-3 object-fit w-24 h-24"
                  />
                  <h3 className="text-center text-sm text-wrap border-t-2 w-[98%] px-2 font-medium mt-2">
                    {item.title}
                  </h3>
                </div>
                <h3 className="bg-gray-600 text-white rounded-full p-1 w-6 h-6 text-sm flex items-center justify-center">
                  VS
                </h3>
                <div>
                  <img
                    src={item.image.src}
                    alt={item.title}
                    className="p-3 object-fit w-24 h-24"
                  />
                  <h3 className="text-center text-sm text-wrap border-t-2 w-[98%] px-2 font-medium mt-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularComparison;

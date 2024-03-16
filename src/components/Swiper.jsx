import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { bestSellingProductsData } from "../data/bestselling";
// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { data } from "autoprefixer";

export default function SwiperJs() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        {bestSellingProductsData.map((pro) => (
          <SwiperSlide>
            <img src={pro.img1} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

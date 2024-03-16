import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const imagesData = [
  {
    img: "https://www.hopenotout.com/cdn/shop/files/SPECIAL-PRCES-1_85c60e07-a840-4592-a00a-d53a9d3518cf_1728x.jpg?v=1709726325",
    resImg:
      "https://www.hopenotout.com/cdn/shop/files/SPECIAL-PRCES-Mobile_81578b4b-7c57-4945-a219-8ee7b8c85644_720x.jpg?v=1709726342",
  },
  {
    img: "https://www.hopenotout.com/cdn/shop/files/Flat-60-50_1728x.jpg?v=1709726395",
    resImg:
      "https://www.hopenotout.com/cdn/shop/files/Flat-60-50-MBL_720x.jpg?v=1709726414",
  },
  {
    img: "https://www.hopenotout.com/cdn/shop/files/Men-1_900x.jpg?v=1709729189",
    resImg:
      "https://www.hopenotout.com/cdn/shop/files/Men-MBL-1_1512x.jpg?v=1709729206",
  },
  {
    img: "https://www.hopenotout.com/cdn/shop/files/Women-2_900x.jpg?v=1709729251",
    resImg:
      "https://www.hopenotout.com/cdn/shop/files/WOMEN-MBL-2_1512x.jpg?v=1709729274",
  },
  {
    img: "https://www.hopenotout.com/cdn/shop/files/Kids_71a4469a-a8c4-4740-84f4-09658056ce05_900x.jpg?v=1709729314",
    resImg:
      "https://www.hopenotout.com/cdn/shop/files/Kids-Mobile_26f164c7-56fa-44e5-9264-5e2010577872_1296x.jpg?v=1709729346",
  },
  {
    img: "https://www.hopenotout.com/cdn/shop/files/EASTERN-1_900x.jpg?v=1709729378",
    resImg:
      "https://www.hopenotout.com/cdn/shop/files/EASTERN-MOBILE-1_1296x.jpg?v=1709729396",
  },
];
function HomePagination() {
  return (
    <div className="mt-5 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {imagesData.map((data, i) => (
          <SwiperSlide key={i}>
            {/* <img
              src={data.img}
              alt=""
              className="h-[100vh] sm:h-[50vw] w-full "
            /> */}
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={data.img}
                className="h-[100vh] sm:h-[50vw] w-full"
              />
              <source
                media="(min-width: 372px)"
                srcSet={data.resImg}
                className="h-[100vh] sm:h-[50vw] w-full"
              />
              <img
                src={data.resImg}
                alt="Description of the small "
                className="h-[100vh] sm:h-[50vw] w-full"
              />
            </picture>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
      </Swiper>
    </div>
  );
}

export default HomePagination;

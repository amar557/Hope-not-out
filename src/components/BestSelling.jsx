import BestSellingCard from "./BestSellingCard";
import { bestSellingProductsData } from "../data/bestselling";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Heading } from "./CategoryMenAndWomen";

function BestSelling() {
  return (
    <div className="flex flex-col gap-6">
      <Heading>best seller</Heading>
      <div className="flex overflow-hidden lg:mx-auto justify-center h-[99vw]  sm:h-[83vw] md:h-[55vw] lg:h-[40vw] px-3 w-full lg:w-11/12 xl:w-4/5 2xl:w-4/5 ">
        <Swiper
          slidesPerGroup={4}
          slidesPerView={2}
          spaceBetween={30}
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
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {bestSellingProductsData.map((data, i) => (
            <SwiperSlide key={i}>
              <BestSellingCard
                img1={data.img1}
                img2={data.img2}
                rate={data.rate}
                discountRate={data.discountRate}
                isDiscount={data.discountRate}
                text={data.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <BestSellingCard /> */}
      </div>
    </div>
  );
}

export default BestSelling;

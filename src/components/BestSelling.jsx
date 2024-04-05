import BestSellingCard from "./BestSellingCard";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Heading } from "./CategoryMenAndWomen";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestSelling } from "../redux/AsyncFIrebase";
import "swiper/css";
import "swiper/css/pagination";

function BestSelling() {
  const dispatch = useDispatch();
  const select = useSelector((me) => me.anchor.bestSellingProducts);
  useEffect(() => {
    dispatch(fetchBestSelling());
  }, []);
  // console.log(select);
  // select.map((data) => console.log(data.id));
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
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
              slidesPerGroup: 4,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {select.map((data, i) => (
            <SwiperSlide key={i}>
              <BestSellingCard
                img1={data.data().img1}
                img2={data.data().img2}
                rate={data.data().rate}
                discountRate={data.data().discountRate}
                isDiscount={data.data().discountRate}
                text={data.data().text}
                id={data.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BestSelling;

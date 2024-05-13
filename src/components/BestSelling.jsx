import BestSellingCard from "./BestSellingCard";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Heading } from "./CategoryMenAndWomen";
import "swiper/css";
import "swiper/css/pagination";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../FireBase/firebase";

function BestSelling() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getbestsellingdata(param) {
      const query = await getDocs(collection(firestore, "bestsellingproducts"));
      setData(query.docs);
      return query.docs;
    }
    getbestsellingdata();
  }, []);
  return (
    <div className="flex flex-col gap-6">
      <Heading>best seller</Heading>
      <div className="flex overflow-hidden lg:mx-auto justify-center h-[99vw]  sm:h-[83vw] md:h-[55vw] lg:h-[40vw] px-3 w-full lg:w-11/12 xl:w-4/5 2xl:w-4/5 ">
        <Swiper
          slidesPerGroup={2}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
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
          {data.map(
            (data, i) =>
              data.data() && (
                <SwiperSlide key={i}>
                  <BestSellingCard
                    data={data.data().urls}
                    rate={data.data().rate}
                    discountRate={data.data().discountRate}
                    isDiscount={data.data().isDiscount}
                    text={data.data().text}
                    id={data.id}
                  />
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default BestSelling;

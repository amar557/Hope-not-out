import BestSellingCard from "./BestSellingCard";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Heading } from "./CategoryMenAndWomen";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestSelling } from "../redux/AsyncFIrebase";
import "swiper/css";
import "swiper/css/pagination";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../FireBase/firebase";

function BestSelling() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const select = useSelector((me) => me.anchor.bestSellingProducts);
  const N2 = useSelector((e) => e);
  // console.log(select);
  useEffect(() => {
    async function getbestsellingdata(param) {
      console.log("why you are called");
      const query = await getDocs(collection(firestore, "bestsellingproducts"));
      setData(query.docs);
      return query.docs;
    }
    getbestsellingdata();
  }, []);
  console.log(data);
  return (
    <div className="flex flex-col gap-6">
      <Heading>best seller</Heading>

      {/* <pre>{select}</pre> */}

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
                    isDiscount={data.data().discountRate}
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

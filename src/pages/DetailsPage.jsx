import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestSelling, getDataByID } from "../redux/AsyncFIrebase";
import { useEffect, useRef, useState } from "react";
import { CiTimer } from "react-icons/ci";
import { sizeData } from "../data/Size";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { SwiperSlide, Swiper } from "swiper/react";
import BestSellingCard from "../components/BestSellingCard";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Heading } from "../components/CategoryMenAndWomen";
import Footer from "../components/Footer";
import ViewCartPopUp from "../components/ViewCartPopUp";

function DetailsPage() {
  const [viewCart, setViewCart] = useState(false);
  const selected = useSelector((data) => data.detailsPage);

  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataByID(params.id));
  }, []);
  const data = selected.details;
  function handleCartPopUp() {
    setViewCart((view) => !view);
  }
  return (
    <div>
      {selected.isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <div className=" overflow-hidden flex items-start px-4  justify-start mt-8 flex-col md:flex-row ">
            <div className="flex md:flex-row flex-col-reverse">
              <div className="shrink-0 grow-1 gap-3 flex md:flex-col  md:me-3">
                <img
                  src={data.img2}
                  alt=""
                  className="h-40 mt-3 md:mt-0 md:mb-3"
                />
                <img src={data.img1} alt="" className="h-40 mt-3 md:mt-0" />
              </div>
              <div className="shrink-0 grow-1 basis-9/12">
                <img src={data.img1} alt="" />
              </div>
            </div>
            <div className="shrink-0 grow  basis-5/12  ">
              <h1 className="text-2xl  font-semibold font-poppins">
                {data.text}
              </h1>
              <h1 className="uppercase font-poppins text-sm my-3">
                sku: {params.id}
              </h1>
              <div className="flex items-center justify-start gap-2 mt-3">
                <p
                  className={`uppercase ${
                    data.isDiscount && "line-through"
                  } text-[#878787] text-xl`}
                >
                  rs.{data.rate}.00
                </p>
                {data.isDiscount && (
                  <p className="text-red-500 uppercase  text-xl">
                    rs.{data.discountRate}
                  </p>
                )}
                {data.isDiscount && (
                  <p className="bg-red-600 p-1 text-white rounded-md text-xs">
                    SAVE Rs {data.rate - data.discountRate}
                  </p>
                )}
              </div>
              <InstallementCard data={data} />
              <SizeContainer />
              <CartButtons handleCartPopUp={handleCartPopUp} />
              <PictureDiscription />
            </div>
          </div>
          <RecommendedProducts />
          <Footer />
          {viewCart && <ViewCartPopUp handleCartPopUp={handleCartPopUp} />}
        </>
      )}
    </div>
  );
}

function InstallementCard({ data }) {
  return (
    <div className="border my-5 rounded-lg ps-2 pe-4 py-2 ">
      <div className="flex  gap-3 items-center">
        <BaadMainBtn />
        <p className="font-bold text-sm md:text-lg">
          pay in 3 installments of
          <span className="text-[#7826f6] ms-2">
            Rs.
            {Math.floor(
              (data.discountRate || data.rate / 100) * 30 + data.discountRate ||
                data.rate
            )}
          </span>
        </p>
      </div>
      <p className="flex items-center text-sm capitalize md:text-lg gap-1 mt-3">
        <span className="text-violet-800">
          <CiTimer />
        </span>
        shopping limits: Rs 1,000 - 15,000
      </p>
    </div>
  );
}

export const BaadMainBtn = function () {
  return (
    <button className="bg-[#7826f6] py-1 px-1 text-white md:px-2  md:text-xl lowercase rounded-md font-marker w-max">
      baadmain
    </button>
  );
};
function SizeContainer() {
  const [currentSize, setCurrentSize] = useState("");
  const click = useRef();
  useEffect(() => {
    function handleChangeData(i = 0) {
      setCurrentSize(sizeData[i]);
    }
    click.current = handleChangeData;
    handleChangeData();
  }, []);
  return (
    <>
      <h1 className="font-semibold text-lg">
        size :<span className="font-medium text-base ms-2">{currentSize}</span>
      </h1>
      <ul className="flex gap-2 flex-wrap">
        {sizeData.map((data, i) => (
          <li
            className={`bg-[#f5f5f5] py-3 grid place-content-center px-2 basis-1/5 md:basis-[10.33%] md:py-2 grow-0 text-xs font-semibold ${
              data === currentSize && "bg-black text-white"
            } `}
            onClick={(e) => click.current(i)}
          >
            {data}
          </li>
        ))}
      </ul>
    </>
  );
}

function CartButtons({ handleCartPopUp }) {
  return (
    <div className="mt-5 flex gap-2 flex-col md:flex-row items-center">
      <div className="flex py-2 px-5 cursor-pointer mb-3 md:mb-0 border rounded-3xl border-black w-max gap-5 font-semibold">
        <button className="text-sm">
          <FaMinus />
        </button>
        <span className="">2</span>
        <button className="text-sm">
          <FaPlus />
        </button>
      </div>
      <button
        className="bg-red-500 uppercase py-2 font-semibold button-animation text-white rounded-3xl hover:cursor-pointer grow"
        onClick={handleCartPopUp}
      >
        add to cart
      </button>
    </div>
  );
}

function PictureDiscription() {
  return (
    <div className="mt-5">
      <img
        src="https://cdn.shopify.com/s/files/1/0247/3331/9215/files/Boys_Crew_Neck_Tee_Shirt_91f571f5-26ef-4116-a901-080e8a255daa.jpg?v=1710882373"
        alt=""
      />
      <p className="mt-4 capitalize text-base font-normal">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia,
        fuga! Eveniet asperiores iste laudantium architecto maxime placeat
        obcaecati alias veritatis expedita autem similique, ratione sequi harum
        adipisci minus quos cum?
      </p>
      <p className="font-bold text-base capitalize mt-4">
        color: <span className="capitalize font-normal text-base">navy</span>
      </p>
      <p className="font-bold text-base capitalize mt-4">
        fabric: <span className="capitalize font-normal text-base">jersey</span>
      </p>
      <p className="mt-6">
        <h1 className="capitalize font-bold text-base mb-5">
          care instructions:
        </h1>
        <ul>
          {Array.from({ length: 5 }).map((data) => (
            <li className="list-disc ms-5">Lorem ipsum dolor sit amet.</li>
          ))}
        </ul>
      </p>
      <button className="text-[#ff0000] font-bold capitalize mt-8">
        delivery and replacement policy
      </button>
    </div>
  );
}

function RecommendedProducts() {
  const select = useSelector((data) => data.anchor.bestSellingProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBestSelling());
  }, []);
  return (
    <div className="mt-10">
      <Heading>recommended</Heading>
      <div className="flex  overflow-hidden lg:mx-auto justify-center h-[99vw]  sm:h-[83vw] md:h-[55vw] lg:h-[40vw] px-3 w-full lg:w-11/12 xl:w-4/5 2xl:w-4/5 ideal">
        <Swiper
          slidesPerGroup={2}
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: false,
          }}
          breakpoints={{
            640: {
              slidesPerGroup: 2,
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerGroup: 4,
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerGroup: 4,
              slidesPerView: 4,
              spaceBetween: 50,
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
                isDiscount={data.data().isDiscount}
                text={data.data().text}
                id={data.id}
                button={"disable"}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default DetailsPage;

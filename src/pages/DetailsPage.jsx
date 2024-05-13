import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchBestSelling, getDataByID } from "../redux/AsyncFIrebase";
import { SwiperSlide, Swiper } from "swiper/react";
import { CiTimer } from "react-icons/ci";
import { sizeData } from "../data/Size";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import BestSellingCard from "../components/BestSellingCard";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Heading } from "../components/CategoryMenAndWomen";
import ViewCartPopUp from "../components/ViewCartPopUp";
import { addToCart, SubTotal } from "../redux/CartSlice";
import BaadMainPop from "../components/BaadMainPop";
import Loader from "../components/Loader";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { getStorage } from "firebase/storage";
import PrevButton from "../components/PrevButton";
import NextButton from "../components/NextButton";

function DetailsPage() {
  const [viewCart, setViewCart] = useState(false);
  const [currentSize, setCurrentSize] = useState("");
  const [curImg, setCurImg] = useState("");
  const params = useParams();
  const dispatch = useDispatch();
  console.log(curImg);
  const data = useSelector((data) => data.detailsPage.details);
  let isLoading = useSelector((data) => data.detailsPage.isLoading);
  function ResetPgination() {
    setCurImg("");
  }
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getDataByID(params));
  }, [params, dispatch]);

  const storage = getStorage();

  function handleCartPopUp() {
    setViewCart((view) => !view);
  }

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className=" overflow-hidden flex items-start px-4  justify-start mt-8 flex-col md:flex-row ">
            <div className="flex md:flex-row flex-col-reverse w-full">
              <div className="shrink-0  gap-3 flex md:flex-col  md:me-3">
                {data.urls?.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="first"
                    className="h-40 mt-3 md:mt-0 md:mb-3"
                    onClick={() => setCurImg(img)}
                  />
                ))}
              </div>
              <div className="md:w-52 w-full h-52 shrink basis-4/5 group  grow-1  md:basis-9/12">
                {data.urls && data.urls.length > 1 ? (
                  <Swiper
                    navigation={true}
                    modules={[EffectFade, Navigation, Pagination]}
                    loop={true}
                    effect={"fade"}
                    className="mySwiper"
                  >
                    {data.urls?.map((img, i) => (
                      <SwiperSlide>
                        <div className="shrink-0 grow-1 basis-full md:basis-9/12 hover:cursor-grab">
                          <img src={curImg || img} alt="" className="w-full" />
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="absolute opacity-0 group-hover:opacity-100 top-1/2 left-1/2 px-2 -translate-y-1/2 flex items-center justify-between w-full z-10 transition-all -translate-x-1/2">
                      <PrevButton ResetPgination={ResetPgination} />
                      <NextButton ResetPgination={ResetPgination} />
                    </div>
                  </Swiper>
                ) : (
                  <div className="shrink-0 grow-1 basis-full md:basis-9/12 hover:cursor-grab">
                    <img
                      src={data.urls && data.urls[0]}
                      alt=""
                      className="w-full"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="shrink-0 grow  basis-5/12 md:ps-2 lg:ps-0  ">
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
                    rs.{data.discountRate}.00
                  </p>
                )}
                {data.isDiscount && (
                  <p
                    className="bg-red-600 p-1 text-white rounded-md text-xs"
                    onClick={() => dispatch(SubTotal())}
                  >
                    SAVE Rs {data.rate - data.discountRate}
                  </p>
                )}
              </div>
              <InstallementCard data={data} />
              <SizeContainer
                currentSize={currentSize}
                setCurrentSize={setCurrentSize}
              />
              <CartButtons
                handleCartPopUp={handleCartPopUp}
                data={data}
                currentSize={currentSize}
                id={params.id}
                image={data.urls && data.urls[0]}
              />
              <PictureDiscription />
            </div>
          </div>
          <RecommendedProducts />

          {viewCart && <ViewCartPopUp handleCartPopUp={handleCartPopUp} />}
        </>
      )}
    </div>
  );
}

function InstallementCard({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleBadMainPop() {
    setIsOpen((open) => !open);
  }
  return (
    <div className="border my-5 rounded-lg ps-2 pe-4 py-2 ">
      <div className="flex  gap-3 items-center">
        <BaadMainBtn handleClick={handleBadMainPop} />
        {isOpen && <BaadMainPop handleClick={handleBadMainPop} />}
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

export const BaadMainBtn = function ({ handleClick }) {
  return (
    <button
      className="bg-[#7826f6] py-1 px-1 text-white md:px-2  md:text-xl lowercase rounded-md font-marker w-max"
      onClick={handleClick}
    >
      baadmain
    </button>
  );
};
function SizeContainer({ setCurrentSize, currentSize }) {
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
            className={`bg-[#f5f5f5] hover:bg-black hover:text-white hover:cursor-pointer transition-all duration-300 py-3 grid place-content-center px-1 basis-1/4   md:basis-[10.33%] md:py-2 grow-0 text-xs font-semibold ${
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

function CartButtons({ handleCartPopUp, data, id, currentSize, image }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  function IncreaseQuantity() {
    setQuantity((q) => q + 1);
  }
  function DecreaseQuantity() {
    if (quantity < 2) return;
    setQuantity((quanty) => quanty - 1);
  }
  return (
    <div className="mt-5 flex gap-2 flex-col md:flex-row items-center">
      <div className="flex py-2 px-5 cursor-pointer mb-3 md:mb-0 border rounded-3xl border-black w-max gap-5 font-semibold">
        <button
          className="text-sm"
          onClick={() => {
            DecreaseQuantity();
          }}
        >
          <FaMinus />
        </button>
        <span className="">{quantity}</span>
        <button className="text-sm" onClick={IncreaseQuantity}>
          <FaPlus />
        </button>
      </div>
      <button
        className="bg-black uppercase w-full py-2 font-semibold button-animation text-white rounded-3xl hover:cursor-pointer grow"
        onClick={() => {
          handleCartPopUp();
          dispatch(
            addToCart({
              img: image,
              rate: data.rate,
              text: data.text,
              isDiscount: data.isDiscount,
              discountRate: data.discountRate,
              size: currentSize,
              id,
              quantity,
              total: data.isDiscount ? data.discountRate : data.rate,
            })
          );
        }}
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
      <p className="mt-4 capitalize text-sm font-normal">
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
    dispatch(fetchBestSelling("bestsellingproducts"));
  }, []);

  return (
    <div className="mt-10">
      <Heading>recommended</Heading>
      <div className="flex  overflow-hidden lg:mx-auto justify-center h-[99vw]  sm:h-[83vw] md:h-[55vw] lg:h-[40vw] px-3 w-full lg:w-11/12 xl:w-4/5 2xl:w-4/5 ideal">
        <Swiper
          slidesPerGroup={2}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
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
                data={data.data().urls}
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

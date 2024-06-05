import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { fetchBestSelling } from "../redux/AsyncFIrebase";
import BestSellingCard from "../components/BestSellingCard";
import { AllPages } from "../data/Size";
import { IoManOutline } from "react-icons/io5";
import { IoWomanOutline } from "react-icons/io5";
import { LiaChildSolid } from "react-icons/lia";
function Collection() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const select = useSelector((me) => me.anchor.bestSellingProducts);
  const isLoading = useSelector((me) => me.anchor.loading);
  const a = AllPages.find((e) => e === params.collectionname);

  const pages = [
    {
      icon: <IoWomanOutline />,
      link: "women",
      label: "women",
    },
    {
      icon: <IoManOutline />,
      link: "men",
      label: "mens",
    },
    {
      icon: <LiaChildSolid />,
      link: "mini-girls",
      label: "mini kids",
    },
    {
      icon: <LiaChildSolid />,
      link: "boys",
      label: "kids",
    },
  ];

  useEffect(() => {
    if (!a) {
      navigate("/error");
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(fetchBestSelling(params.collectionname));
  }, [params.collectionname, a]);

  return (
    <>
      <p className="bg-[#ece9e9] text-black w-full py-[50px] text-xl uppercase leading-5 tracking-tight font-poppins font-medium text-center">
        {params.collectionname}
      </p>
      <div className="flex my-5 items-center gap-5 justify-center">
        {pages.map((e, i) => (
          <div
            key={i}
            className="hover:cursor-pointer flex items-center justify-center flex-col"
            onClick={() => navigate(`/collection/${e.link}`)}
          >
            <p className="text-2xl">{e.icon}</p>
            <p className="capitalize">{e.label}</p>
          </div>
        ))}
      </div>
      {isLoading ? (
        <div class="min-h-[50vh] flex justify-center items-center ">
          <div class="loader bg-white p-5 rounded-full flex space-x-3">
            <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
            <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
            <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-2 sm:gap-10 items-start px-2 justify-start sm:px-5  my-5">
            {select.length < 1 ? (
              <div className="text-center">sorry no items</div>
            ) : (
              select.map((data, i) => (
                <div
                  className=" md:basis-1/4 lg:basis-1/6 sm:basis-[46%] basis-[48%] "
                  key={i}
                >
                  <BestSellingCard
                    to={params.collectionname}
                    data={data.data().urls}
                    rate={data.data().rate}
                    discountRate={data.data().discountRate}
                    isDiscount={data.data().discountRate}
                    text={data.data().text}
                    id={data.id}
                  />
                </div>
              ))
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Collection;

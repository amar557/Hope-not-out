import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { fetchBestSelling } from "../redux/AsyncFIrebase";
import BestSellingCard from "../components/BestSellingCard";
import { AllPages } from "../data/Size";
function Collection() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const select = useSelector((me) => me.anchor.bestSellingProducts);
  const isLoading = useSelector((me) => me.anchor.loading);
  const a = AllPages.find((e) => e === params.collectionname);

  useEffect(() => {
    if (!a) {
      navigate("/error");
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(fetchBestSelling(params.collectionname));
  }, [params.collectionname, a]);

  return (
    <>
      <p className="bg-[#ece9e9] text-black w-full py-[50px]  text-xl uppercase leading-5 tracking-tight font-poppins font-medium   text-center">
        {params.collectionname}
      </p>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <>
          <div className="flex flex-wrap gap-10 items-center justify-start px-5 my-5">
            {select.length < 1 ? (
              <div className="text-center">sorry no items</div>
            ) : (
              select.map((data, i) => (
                <div
                  className=" md:basis-1/4 lg:basis-1/6 sm:basis-[48%] basis-1/2 "
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

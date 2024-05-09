import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchBestSelling } from "../redux/AsyncFIrebase";
import BestSellingCard from "../components/BestSellingCard";

function Collection() {
  const params = useParams();
  const dispatch = useDispatch();
  const select = useSelector((me) => me.anchor.bestSellingProducts);
  const isLoading = useSelector((me) => me.anchor.loading);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(fetchBestSelling(params.collectionname));
  }, [params.collectionname]);

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
                <BestSellingCard
                  to={params.collectionname}
                  key={data.id}
                  data={data.data().urls}
                  rate={data.data().rate}
                  discountRate={data.data().discountRate}
                  isDiscount={data.data().discountRate}
                  text={data.data().text}
                  id={data.id}
                />
              ))
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Collection;

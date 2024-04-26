import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchBestSelling } from "../redux/AsyncFIrebase";
import BestSellingCard from "../components/BestSellingCard";

function Collection() {
  const params = useParams();
  const dispatch = useDispatch();
  const select = useSelector((me) => me.anchor.bestSellingProducts);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(fetchBestSelling(params.collectionname));
  }, [params.collectionname]);
  // console.log(select.map((d) => d.data()));

  // console.log(params.collectionname);
  return (
    <div className="flex flex-wrap items-center justify-between">
      {select.map((data, i) => (
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
      ))}
    </div>
  );
}

export default Collection;

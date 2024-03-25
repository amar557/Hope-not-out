import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getDataByID } from "../redux/AsyncFIrebase";
import { useEffect } from "react";
import { CiTimer } from "react-icons/ci";

function DetailsPage() {
  const selected = useSelector((data) => data.detailsPage);

  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataByID(params.id));
  }, []);
  const data = selected.details;
  console.log(data);
  // console.log(selected.isLoading);
  return (
    <div>
      {selected.isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="flex items-start  justify-start mt-8">
          <div className="shrink-0 grow-1 basis-[12%]">
            <img src={data.img2} alt="" className="h-48 mt-3" />
            <img src={data.img1} alt="" className="h-48 mt-3" />
          </div>
          <div className="shrink-0 grow-1 basis-2/5">
            <img src={data.img1} alt="" />
          </div>
          <div className="shrink-0 grow-1 basis-2/5 ms-5">
            <h1 className="text-3xl  font-semibold font-poppins">
              {data.text}
            </h1>
            <h1 className="uppercase font-poppins my-3">sku:{params.id}</h1>
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
          </div>
        </div>
      )}
    </div>
  );
}

function InstallementCard({ data }) {
  return (
    <div className="border my-5 rounded-lg px-5 py-2 ">
      <div className="flex  gap-3">
        <button className="bg-[#7826f6] py-1 px-3 text-white rounded-md font-marker">
          baad main
        </button>
        <p className="font-bold text-lg">
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
      <p className="flex items-center capitalize gap-1 mt-3">
        <span className="text-violet-800">
          <CiTimer />
        </span>
        shopping limits: Rs 1,000 - 15,000
      </p>
    </div>
  );
}

export default DetailsPage;

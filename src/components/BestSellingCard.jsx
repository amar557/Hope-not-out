import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router";

function BestSellingCard({
  data,
  to = "bestsellingproducts",
  text,
  isDiscount,
  rate,
  discountRate,
  id,
}) {
  const navigate = useNavigate();

  return (
    <div className="relative  grow-0 shrink-0 basis-1/6 h-max  transition-all duration-500 overflow-hidden  ">
      <div className="md:h-[31vw] w-full h-[69vw] lg:h-[25vw] overflow-hidden group hover:cursor-pointer relative ">
        <img
          src={data && data[0]}
          alt=""
          className={` ${
            data && data[1] && "group-hover:opacity-0"
          } transition-all h-full w-full duration-500 object-cover `}
        />
        <img
          src={data && data[1]}
          alt=""
          className={` ${
            data && data[1] && "group-hover:scale-110 group-hover:opacity-100"
          }  transition-all duration-1000 h-full w-full absolute object-cover top-0 right-0 opacity-0 `}
        />
        <button className="bg-white text-black absolute bottom-6 right-2 p-1 rounded-full text-lg lg:hidden block ">
          <BsThreeDots />
        </button>
        <div
          className="absolute -top-2/4 w-40 -translate-x-2/4 -translate-y-2/4 overflow-hidden  group-hover:top-2/4 left-2/4 h-44 flex items-center justify-center "
          onClick={() => navigate(`/${to}/${id}`)}
        >
          <button className="absolute top-5 left-2/4 overflow-hidden -translate-x-2/4  -translate-y-2/4 bg-white py-2 px-5 rounded-full w-40   h-10 transition-all duration-300 group-hover:opacity-100 group-hover:top-2/4 btn">
            <span className="absolute translate-y-0 bg-white top-0 left-0  w-full h-full flex items-center justify-center text transition-all duration- ">
              select options
            </span>
            <span className=" absolute translate-y-12 transition-all  text-xl bg-black w-full h-full top-0 left-0  flex items-center justify-center dots text-white ">
              <BsThreeDots />
            </span>
          </button>
        </div>
      </div>
      <p className="font-medium mt-3 text-sm">{text}</p>
      <div className="space-x-2">
        <span className={`${isDiscount ? "line-through" : ""} text-sm`}>
          Rs.{rate.toLocaleString("en-US")}.00
        </span>

        {isDiscount && (
          <span className="text-red-500 font-medium capitalize text-sm">
            Rs.{discountRate.toLocaleString("en-US")}.00
          </span>
        )}
      </div>
      {isDiscount && (
        <span className="absolute top-2 right-2 bg-red-600 text-[10px] py-1 px-2 text-white">
          -{Math.trunc(((rate - discountRate) / rate) * 100)}%
        </span>
      )}
    </div>
  );
}

export default BestSellingCard;

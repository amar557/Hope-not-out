import { BsThreeDots } from "react-icons/bs";
function BestSellingCard({ img1, img2, text, isDiscount, rate, discountRate }) {
  return (
    <div className="relative  grow shrink-0 basis-1/6 h-max  transition-all duration-500 overflow-hidden  ">
      <div className="md:h-[31vw] h-[69vw] lg:h-[25vw] overflow-hidden group hover:cursor-pointer relative ">
        <img
          src={img1}
          alt=""
          className="  group-hover:opacity-0 transition-all duration-500 "
        />
        <img
          src={img2}
          alt=""
          className=" group-hover:scale-110 transition-all duration-1000  absolute top-0 right-0 opacity-0 group-hover:opacity-100"
        />
        <button className="bg-white text-black absolute bottom-2 right-2 p-2 rounded-full text-xl lg:hidden block ">
          <BsThreeDots />
        </button>
        <div className="absolute -top-2/4 w-40 -translate-x-2/4 -translate-y-2/4 overflow-hidden  group-hover:top-2/4 left-2/4 h-44 flex items-center justify-center ">
          <button className="absolute top-5 left-2/4 overflow-hidden -translate-x-2/4  -translate-y-2/4 bg-white py-2 px-5 rounded-full w-40   h-10 transition-all duration-300 group-hover:opacity-100 group-hover:top-2/4 btn">
            <span className="absolute translate-y-0 bg-white top-0 left-0  w-full h-full flex items-center justify-center text transition-all duration- ">
              select options
            </span>
            <span className=" absolute translate-y-12 transition-all duration- text-xl bg-black w-full h-full top-0 left-0  flex items-center justify-center dots text-white ">
              <BsThreeDots />
            </span>
          </button>
        </div>
      </div>
      <p className="font-medium mt-3">{text}</p>
      <div className="space-x-2">
        <span>Rs {rate}</span>
        {isDiscount && (
          <span className="text-red-500 font-medium">{discountRate}</span>
        )}
      </div>
      <span className="absolute top-2 right-2 bg-red-600 text-[10px] py-1 px-2 text-white">
        -50%
      </span>
    </div>
  );
}

export default BestSellingCard;

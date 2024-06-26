import { useSwiper } from "swiper/react";
import { MdKeyboardArrowRight } from "react-icons/md";

function NextButton({ ResetPgination }) {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => {
        swiper.slideNext();
        ResetPgination();
      }}
      className="border-black rounded-full hover:cursor-pointer hover:text-white hover:bg-black transition-all p-2 border-2"
    >
      <MdKeyboardArrowRight />
    </div>
  );
}

export default NextButton;

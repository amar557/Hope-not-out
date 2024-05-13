import { useSwiper } from "swiper/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
function PrevButton({ ResetPgination }) {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => {
        swiper.slidePrev();
        ResetPgination();
      }}
      className="border-black rounded-full hover:text-white hover:bg-black transition-all p-2 border-2 hover:cursor-pointer"
    >
      <MdKeyboardArrowLeft />
    </div>
  );
}

export default PrevButton;

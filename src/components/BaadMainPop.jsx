import { RxCross2 } from "react-icons/rx";
import { FaRegCalendar } from "react-icons/fa";
const baadMainData = [
  {
    text: "Select BaadMay at Checkout",
    icon: "https://baadmay.com/assets/icon-checkout.svg",
  },
  {
    text: "Verify your account details",
    icon: "https://baadmay.com/assets/icon-account-details.svg",
  },
  {
    text: "Pay only your first installment now",
    icon: "https://baadmay.com/assets/icon-pay-first-installment.svg",
  },
];
function BaadMainPop({ handleClick }) {
  return (
    <div className="h-full z-50 w-full bg-[#000000b6] fixed top-0 left-0 ">
      <div className="h-full w-full  "></div>
      <div className=" h-max rounded-3xl absolute top-2/4 left-2/4 overflow-hidden -translate-x-2/4 -translate-y-2/4 bg-red-200 ">
        <button
          className="absolute top-10 right-2 rounded-full p-2 bg-[#ffffffba] "
          onClick={handleClick}
        >
          <RxCross2 />
        </button>
        <div className="bg-[#6016eb] text-center text-white pb-40 px-12  pt-10">
          <p className="text-2xl font-semibold">
            Pay for your purchase, thora abhi, baqi?
          </p>
          <p className="text-3xl font-marker my-5">baadmain</p>
        </div>
        <div className="text-center bg-white pt-28">
          <h1 className="text-2xl font-semibold">Add items to your cart?</h1>

          <div className="flex border-b items-center justify-between px-12 pb-12 mt-10">
            {baadMainData.map((data) => (
              <div className="flex items-center justify-center flex-col">
                <img src={data.icon} alt="" />
                <span className=" p-3  text-base text-slate-700 font-poppins mb-2 ">
                  {data.text}
                </span>
              </div>
            ))}
          </div>
          <div className="text-[#6016eb] text-2xl font-semibold ">
            Let’s shop and pay BaadMay!
          </div>
          <CenterCard />
        </div>
      </div>
    </div>
  );
}

function CenterCard() {
  return (
    <div className="absolute top-[45%] left-2/4 grid w-9/12 place-content-center -translate-x-2/4 -translate-y-2/4 p-8 bg-white rounded-3xl shadow-xl ">
      <span className="bg-[#f4dcd8] p-6 mb-3 text-4xl mx-auto rounded-full">
        <FaRegCalendar />
      </span>
      <p className="text-lg font-semibold text-slate-700">
        Pay in 3 Monthly Installments
      </p>
    </div>
  );
}
export default BaadMainPop;

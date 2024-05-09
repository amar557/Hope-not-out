import { Link } from "react-router-dom";

function ViewCartPopUp({ handleCartPopUp }) {
  return (
    <div className="h-[100vh] w-full fixed top-0 left-0 overflow-y-hidden z-50">
      <button
        className="absolute top-5 right-5 bg-white p-3 "
        onClick={handleCartPopUp}
      >
        close
      </button>
      <div
        className="bg-[#000000a6]  top-0 h-full overflow-hidden left-0  w-full "
        onClick={handleCartPopUp}
      ></div>
      <div className="top-2/4 left-2/4 -translate-x-2/4 w-[90%] -translate-y-2/4 pt-5 px-10 bg-white absolute max-w-[450px] text-center">
        <p className="mb-5 text-lg  sm:text-xl uppercase font-semibold">
          Product was successfully added to your cart.
        </p>
        <div className="mb-5  flex flex-col justify-center md:flex-row gap-5 items-center ">
          <button
            className="border-b w-max border-gray-300 hover:border-b-2 transition-all  hover:border-gray-500"
            onClick={handleCartPopUp}
          >
            continue shopping
          </button>
          <button
            className="border-2 border-black px-5 text-base font-semibold py-1 rounded-3xl hover:bg-black hover:text-white transition-all"
            onClick={handleCartPopUp}
          >
            <Link to="/cart">view cart</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewCartPopUp;

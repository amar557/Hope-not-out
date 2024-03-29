import { Link, useNavigate } from "react-router-dom";

function ViewCartPopUp({ handleCartPopUp }) {
  const navigate = useNavigate();
  return (
    // <></>
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
      <div className="top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 pt-5 px-10 bg-white absolute max-w-[450px] text-center">
        <p className="mb-5 text-2xl font-semibold">
          when pop up open the background should be fixed
        </p>
        <div className="mb-5 space-x-7 ">
          <button
            className="border-b border-gray-300 hover:border-b-2 transition-all  hover:border-gray-500"
            onClick={handleCartPopUp}
          >
            continue shopping
          </button>
          <button
            className="border-2 border-black px-4 text-lg font-semibold py-1 rounded-3xl"
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

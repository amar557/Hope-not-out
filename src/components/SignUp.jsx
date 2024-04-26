import { FaStarOfLife } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function SignUp({ current, handleAuthenticationPages, handleLoginpage }) {
  return (
    <div
      className={` transition-all duration-300 ${
        current === "signup" ? "-translate-x-0 z-50  " : "translate-x-full"
      }`}
    >
      <div className="flex items-center border-b pb-4 justify-between px-5">
        <p className="text-sm uppercase font-medium">register</p>
        <button onClick={handleLoginpage}>
          <RxCross2 />
        </button>
      </div>
      <form action="" className="p-5">
        <div className="">
          <label htmlFor="email" className="relative ">
            <span className="text-sm capitalize ">first name</span>
          </label>
          <input
            type="text"
            name="email"
            id=""
            className="border outline-none block w-full p-2 text-sm  focus:border-black "
          />
        </div>
        <div className="">
          <label htmlFor="email" className="relative ">
            <span className="text-sm capitalize ">last name</span>
          </label>
          <input
            type="text"
            name="email"
            id=""
            className="border outline-none block w-full p-2 text-sm  focus:border-black "
          />
        </div>
        <div className="">
          <label htmlFor="email" className="relative ">
            <span className="text-sm capitalize ">email</span>
            <span className="absolute top-3 -right-2 text-red-600 text-[4px]">
              <FaStarOfLife />
            </span>
          </label>
          <input
            type="email"
            name="email"
            id=""
            className="border outline-none block w-full p-2 text-sm  focus:border-black "
          />
        </div>
        <div className="mt-3">
          <label htmlFor="email" className="relative ">
            <span className="text-sm capitalize ">password</span>
            <span className="absolute top-3 -right-2 text-red-600 text-[4px]">
              <FaStarOfLife />
            </span>
          </label>
          <input
            type="password"
            name="email"
            id=""
            className="border outline-none block w-full p-2 text-sm focus:border-black"
          />
        </div>
        <input
          type="submit"
          value="sign in"
          className="text-sm w-full bg-black rounded-3xl py-2 uppercase font-medium text-white mt-5"
        />
      </form>
      <div className="text-sm px-5">
        New customer?
        <span
          className="hover:cursor-pointer"
          onClick={() => handleAuthenticationPages("login")}
        >
          already have account
        </span>
      </div>
      <div className="text-sm px-5">
        Lost password?
        <span
          className="hover:cursor-pointer"
          onClick={() => handleAuthenticationPages("forgotpassword")}
        >
          Recover password
        </span>
      </div>
    </div>
  );
}

export default SignUp;

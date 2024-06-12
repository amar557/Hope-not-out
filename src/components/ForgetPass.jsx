import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function ForgetPass({ current, handleLoginpage, handleAuthenticationPages }) {
  const [data, setData] = useState({});
  const auth = getAuth();

  function handleChanges(e) {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setData({ ...data, [name]: value });
  }
  async function handleForgotPass(e) {
    e.preventDefault();
    await sendPasswordResetEmail(auth, data.email).then((e) =>
      alert("jalksjdflkj")
    );
  }
  return (
    <div
      className={` transition-all py-3 absolute w-full duration-300 top-0 right-0 ${
        current === "forgotpassword"
          ? "  -translate-x-0 z-50"
          : "translate-x-full"
      }`}
    >
      <div className="flex items-center border-b pb-4 justify-between px-5">
        <p className="text-sm uppercase font-medium">recover password</p>
        <button onClick={handleLoginpage}>
          <RxCross2 />
        </button>
      </div>
      <form action="" className="p-5">
        <div className="">
          <label htmlFor="email" className="relative ">
            <span className="text-sm capitalize ">email</span>
          </label>
          <input
            type="email"
            name="email"
            id="email3"
            className="border outline-none block w-full p-2 text-sm  focus:border-black "
            onChange={handleChanges}
          />
        </div>

        <input
          type="submit"
          value="reset password"
          onClick={handleForgotPass}
          className="text-sm w-full bg-black rounded-3xl py-2 uppercase font-medium text-white mt-5"
        />
      </form>
      <div className="text-sm px-5">
        New customer?
        <span
          className="hover:cursor-pointer"
          onClick={() => handleAuthenticationPages("login")}
        >
          back to login
        </span>
      </div>
    </div>
  );
}

export default ForgetPass;

import { useState } from "react";
import ForgetPass from "./ForgetPass";
import Login from "./Login";
import SignUp from "./SignUp";

function Authentication({ login, handleLoginpage }) {
  const [current, setCurrent] = useState("login");
  function handleAuthenticationPages(cur) {
    setCurrent(cur);
  }

  return (
    <>
      <div
        className={`fixed top-0 right-0 w-full h-screen z-10 ${
          login ? "block" : "hidden"
        }  bg-[#0000009e]`}
        onClick={handleLoginpage}
      ></div>
      <div
        className={` fixed transition-all py-3 h-screen w-full md:w-1/3 duration-300 top-0 right-0 bg-white  ${
          login ? "-translate-x-0 z-50" : "translate-x-full"
        }`}
      >
        <SignUp
          current={current}
          handleAuthenticationPages={handleAuthenticationPages}
          handleLoginpage={handleLoginpage}
        />
        <Login
          current={current}
          handleAuthenticationPages={handleAuthenticationPages}
          handleLoginpage={handleLoginpage}
        />
        <ForgetPass
          current={current}
          handleAuthenticationPages={handleAuthenticationPages}
          handleLoginpage={handleLoginpage}
        />
      </div>
    </>
  );
}

export default Authentication;

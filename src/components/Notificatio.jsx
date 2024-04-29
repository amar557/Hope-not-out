import { useEffect } from "react";

function Notificatio({ err, setError }) {
  return (
    <div
      className={`absolute 
        -translate-x-full right-4 top-0  border bg-white  err-msg h-10 shadow-xl pt-2 transition-all duration-300 pb-3 px-2  w-1/2  z-50`}
    >
      <p className="text-lg capitalize ">error</p>
    </div>
  );
}

export default Notificatio;

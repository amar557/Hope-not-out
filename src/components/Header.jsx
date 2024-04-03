import { RiMenu2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Logo from "../assets/Logo.svg";

import { CiShoppingCart } from "react-icons/ci";
import { PiUserThin } from "react-icons/pi";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  const [showsidebar, setShowSidebar] = useState(false);
  function handleSideBar() {
    setShowSidebar((bar) => !bar);
  }
  const select = useSelector((data) => data.cartData.cart.length);
  const navigate = useNavigate();
  return (
    <div className="flex px-4 py-2 items-center  justify-between relative">
      <RiMenu2Line
        className="cursor-pointer text-2xl "
        onClick={handleSideBar}
      />
      <Link to="/">
        <img src={Logo} alt="" className="w-28 cursor-pointer " />
      </Link>
      <div className=" gap-2 flex text-2xl">
        <CiSearch className="cursor-pointer" />
        <PiUserThin className="cursor-pointer" />
        <span className="relative">
          <CiShoppingCart
            className="cursor-pointer"
            onClick={() => navigate("/cart")}
          />
          <span className="absolute -top-2 -right-2 text-xs bg-black text-white w-4 h-4 grid place-content-center rounded-full">
            {select}
          </span>
        </span>
      </div>
      {/* <Sidebar showsidebar={showsidebar} /> */}
      <Sidebar showsidebar={showsidebar} handleSideBar={handleSideBar} />
    </div>
  );
}

export default Header;

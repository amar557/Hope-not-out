import { RiMenu2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Logo from "../assets/Logo.svg";

import { CiShoppingCart } from "react-icons/ci";
import { PiUserThin } from "react-icons/pi";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
function Header() {
  const [showsidebar, setShowSidebar] = useState(false);
  function handleSideBar() {
    setShowSidebar((bar) => !bar);
  }
  return (
    <div className="flex px-4 py-2 items-center justify-between relative">
      <RiMenu2Line
        className="cursor-pointer text-2xl "
        onClick={handleSideBar}
      />
      <img src={Logo} alt="" className="w-28 cursor-pointer " />
      <div className=" gap-2 flex text-2xl">
        <CiSearch className="cursor-pointer" />
        <PiUserThin className="cursor-pointer" />
        <CiShoppingCart className="cursor-pointer" />
      </div>
      <Sidebar showsidebar={showsidebar} />
    </div>
  );
}

export default Header;

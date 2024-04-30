import { useState } from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Authentication from "./Authentication";
import { RiMenu2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Logo from "../assets/Logo.svg";
import { CiShoppingCart } from "react-icons/ci";
import { PiUserThin } from "react-icons/pi";
import SearchBar from "./SearchBar";
function Header() {
  const [showsidebar, setShowSidebar] = useState(false);
  const [login, setlogin] = useState(false);
  const [searchbar, setSearchBar] = useState(false);
  function handleLoginpage() {
    setlogin((d) => !d);
  }
  function handleSideBar() {
    setShowSidebar((bar) => !bar);
  }
  const select = useSelector((data) => data.cartData.cart.length);
  const navigate = useNavigate();
  return (
    <div className="flex px-4 py-2 z-50 items-center  justify-between sticky">
      <RiMenu2Line
        className="cursor-pointer text-2xl "
        onClick={handleSideBar}
      />
      <Link to="/">
        <img src={Logo} alt="" className="w-28 cursor-pointer " />
      </Link>
      <div className=" gap-2 flex text-2xl">
        <CiSearch
          className="cursor-pointer"
          onClick={() => setSearchBar((e) => !e)}
        />
        <PiUserThin className="cursor-pointer" onClick={handleLoginpage} />
        <span className="relative">
          <CiShoppingCart
            className="cursor-pointer"
            onClick={() => navigate("/cart")}
          />
          <span className="absolute -top-2 -right-2 text-xs bg-black text-white w-4 h-4 grid place-content-center rounded-full">
            {select}
          </span>
        </span>
        <Authentication login={login} handleLoginpage={handleLoginpage} />
        <SearchBar searchbar={searchbar} setSearchBar={setSearchBar} />
      </div>
      <Sidebar showsidebar={showsidebar} handleSideBar={handleSideBar} />
    </div>
  );
}

export default Header;

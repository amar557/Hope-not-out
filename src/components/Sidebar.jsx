import { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import { RxCross2 } from "react-icons/rx";

function Sidebar({ showsidebar, handleSideBar }) {
  const [menu, setMenu] = useState(true);
  const [category, setCategory] = useState(false);
  function handleCategory() {
    setCategory(true);
    setMenu(false);
  }
  function handleMenu() {
    setMenu(true);
    setCategory(false);
  }
  return (
    <>
      <div
        className={` ${
          showsidebar ? "block" : "hidden"
        } absolute bg-opacity-30 h-screen  w-full top-0 left-0 bg-black z-10`}
        onClick={handleSideBar}
      ></div>
      <div
        className={`${
          showsidebar ? " top-0 left-0" : "top-0 -left-full"
        } transition-all bg-white fixed w-5/6 z-50 md:w-1/3  duration-300 overflow-scroll flex items-start justify-between h-screen cursor-pointer `}
      >
        <button
          className={`flex items-center justify-center flex-1 text-black uppercase py-2 px-3  ${
            menu && "bg-[#f5f5f5] border-b-2 border-black "
          }`}
          onClick={handleMenu}
        >
          menu
        </button>

        <button
          className={`flex items-center justify-center flex-1 text-black uppercase py-2 px-3  ${
            category && "bg-[#f5f5f5] border-b-2 border-black "
          }`}
          onClick={handleCategory}
        >
          categories
        </button>
        {menu && <Menu />}
        {category && <Categories />}
        <button className="absolute top-2 right-2 p-2 " onClick={handleSideBar}>
          <RxCross2 />
        </button>
      </div>
    </>
  );
}

export default Sidebar;

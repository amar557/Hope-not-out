import { useState } from "react";
import Menu from "./Menu";

function Sidebar({ showsidebar }) {
  const [menu, setMenu] = useState(true);
  function handleMenu() {
    setMenu(true);
    console.log(menu);
  }
  return (
    <div
      className={`${
        showsidebar ? " top-0 left-0" : "top-0 -left-full"
      } transition-all bg-white fixed w-1/3 z-20 overflow-scroll flex items-start justify-between h-screen cursor-pointer `}
    >
      <button
        className="flex items-center justify-center flex-1 text-black uppercase bg-[#f5f5f5]"
        onClick={handleMenu}
      >
        menu
      </button>
      {menu && <Menu />}

      <button className="flex-1 uppercase text-black">categories</button>
    </div>
  );
}

export default Sidebar;

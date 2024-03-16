import { useState } from "react";
import { navdata } from "../data/navdata";

function Sidebar({ showsidebar }) {
  const [openMenu, setMenu] = useState(false);

  function handleMenues(i) {
    return setMenu((openMenu) => !openMenu);
    // ref.current.style.rotateX = "180deg";
  }
  return (
    <div
      className={`${
        showsidebar ? " top-0 left-0" : "top-0 -left-full"
      } transition-all bg-white fixed w-2/4 z-20 overflow-scroll h-screen cursor-pointer `}
    >
      <ul>
        {navdata.map((data, i) => (
          <>
            <li
              key={i}
              onClick={handleMenues}
              className={`${
                openMenu ? "bg-[#f5f5f5]" : "bg-white"
              }  flex items-center justify-between hover:bg-[#f5f5f5] transition-all p-3 uppercase border-b`}
            >
              <span>{data.nav}</span>
              {data.isChildren && (
                <button className="border-s-teal-200 px-4">
                  {openMenu ? "-" : "+"}
                </button>
              )}
            </li>
            {data.isChildren &&
              data.children.map((data, i) => (
                <Submenu data={data} openMenu={openMenu} key={i} />
              ))}
          </>
        ))}
      </ul>
      {navdata.map(
        (data, i) =>
          !data.isChildren && (
            <li className="list-none" key={i}>
              {data.nav}
            </li>
          )
      )}
    </div>
  );
}

function Submenu({ data, openMenu }) {
  return (
    <>
      {openMenu && (
        <li className={`text-black ps-3 list-none py-2 uppercase border-b`}>
          {data}
        </li>
      )}
    </>
  );
}

export default Sidebar;

import React, { useState } from "react";
import { navdata, info } from "../data/navdata";
import { NavLink } from "react-router-dom";

function Menu() {
  const [openMenu, setOpenMenu] = useState(Array(navdata.length).fill(false));

  console.log(navdata.filter((data) => !data.isChildren));
  function handleMenues(i) {
    setOpenMenu((prevOpenMenu) => {
      const updatedOpenMenu = [...prevOpenMenu];
      updatedOpenMenu[i] = !updatedOpenMenu[i];
      return updatedOpenMenu;
    });
  }

  return (
    <div
      className={` transition-all bg-white absolute  top-12 z-20  h-screen cursor-pointer w-full `}
    >
      <ul>
        {navdata.map((data, i) => (
          <React.Fragment key={i}>
            {data.isChildren && (
              <li
                className={`${
                  openMenu[i] ? "bg-[#f5f5f5]" : "bg-white"
                }  flex items-center justify-between text-slate-700 text-sm hover:bg-[#f5f5f5] transition-all p-3 uppercase border-b`}
              >
                <>
                  <span>{data.nav}</span>
                  <button
                    className="border-s-slate-200 px-4 border-s "
                    onClick={() => handleMenues(i)}
                  >
                    {openMenu[i] ? "-" : "+"}
                  </button>
                </>
              </li>
            )}
            {!data.isChildren && (
              <li
                className={`bg-white flex items-center justify-between text-slate-700 text-sm hover:bg-[#f5f5f5] transition-all p-3 uppercase border-b`}
              >
                <span>{data.nav}</span>
              </li>
            )}
            {data.isChildren &&
              data.children.map((child, index) => (
                <Submenu key={index} data={child} isOpen={openMenu[i]} />
              ))}
          </React.Fragment>
        ))}
      </ul>
      {info.map((d, i) => (
        <li
          className="list-none text-slate-800 text-xs ps-3 py-2 uppercase hover:cursor-auto "
          key={i}
        >
          {d}
        </li>
      ))}
    </div>
  );
}

function Submenu({ data, isOpen }) {
  return (
    <>
      {isOpen && (
        <li
          className={`text-[#989ba3] ps-3 list-none py-2 uppercase border-b text-xs font-medium`}
        >
          {data}
        </li>
      )}
    </>
  );
}

export default Menu;

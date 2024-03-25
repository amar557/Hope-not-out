import React, { useState } from "react";
import { navdata } from "../data/navdata";
import { NavLink } from "react-router-dom";

function Menu({ showsidebar }) {
  const [openMenu, setOpenMenu] = useState(Array(navdata.length).fill(false));

  function handleMenues(i) {
    setOpenMenu((prevOpenMenu) => {
      const updatedOpenMenu = [...prevOpenMenu];
      updatedOpenMenu[i] = !updatedOpenMenu[i];
      return updatedOpenMenu;
    });
  }

  return (
    <div
      className={` transition-all bg-white absolute  top-12 z-20  h-screen cursor-pointer `}
    >
      <ul>
        {navdata.map((data, i) => (
          <React.Fragment key={i}>
            <li
              onClick={() => handleMenues(i)}
              className={`${
                openMenu[i] ? "bg-[#f5f5f5]" : "bg-white"
              }  flex items-center justify-between hover:bg-[#f5f5f5] transition-all p-3 uppercase border-b`}
            >
              <span>{data.nav}</span>
              {data.isChildren && (
                <button className="border-s-teal-200 px-4">
                  {openMenu[i] ? "-" : "+"}
                </button>
              )}
            </li>
            {data.isChildren &&
              data.children.map((child, index) => (
                <Submenu key={index} data={child} isOpen={openMenu[i]} />
              ))}
          </React.Fragment>
        ))}
      </ul>
      {navdata
        .filter((data) => !data.isChildren)
        .map((data, i) => (
          <li
            className="list-none text-black ps-3 py-2 uppercase hover:cursor-auto"
            key={i}
          >
            {data.nav}
          </li>
        ))}
    </div>
  );
}

function Submenu({ data, isOpen }) {
  return (
    <>
      {isOpen && (
        <li className={`text-black ps-3 list-none py-2 uppercase border-b`}>
          {data}
        </li>
      )}
    </>
  );
}

export default Menu;

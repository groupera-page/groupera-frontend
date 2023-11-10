import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export default function MenuDropDown({
  userName = "Username",
  openMenuMobile,
}) {
  const [openMenuDropDown, setOpenMenuDropDown] = useState(false);
  function handleMenuDropDown() {
    if (!openMenuMobile) {
      const openMenu = openMenuDropDown ? false : true;
      setOpenMenuDropDown(openMenu);
    }
  }

  function handleCloseThisMenu() {
    setOpenMenuDropDown(false);
  }

  return (
    <div>
      {openMenuDropDown && (
        <div
          className="absolute bg-transparent w-full h-full top-0 left-0 onClick "
          onClick={handleCloseThisMenu}
        ></div>
      )}
      <div className="lg:mx-20 relative">
        <div
          className={`flex items-center justify-end cursor-pointer  transition-all duration-300 ${
            openMenuMobile ? "opacity-0" : "opacity-100"
          }`}
          onClick={handleMenuDropDown}
        >
          <div className=" border-l border-gray-300 h-8  "></div>
          <div className="text-xs mx-2 ">{userName}</div>
          {openMenuDropDown && (
            <AiOutlineUp className={` text-TEXT_PRIMARY `} size={15} />
          )}
          {!openMenuDropDown && (
            <AiOutlineDown className={` text-TEXT_PRIMARY `} size={15} />
          )}
        </div>

        {openMenuDropDown && (
          <div
            className={`transition-all duration-300 absolute -translate-x-5 top-14  bg-BG_PRIMARY rounded-md  shadow-md ${
              openMenuDropDown ? "opacity-100" : "opacity-0"
            } `}
          >
            <ul className="flex flex-col w-fit">
              <NavLink to="/" onClick={handleCloseThisMenu}>
                <li className="p-2 py-4"> Profil</li>
              </NavLink>
              <>
                <hr className="border-t border-gray-300" />
              </>
              <NavLink to="/" onClick={handleCloseThisMenu}>
                <li className="p-2 py-4">Einstellungen</li>
              </NavLink>
              <>
                <hr className="border-t border-gray-300" />
              </>
              <NavLink to="/" onClick={handleCloseThisMenu}>
                <li className="p-2 py-4">Abo & Zahlungen</li>
              </NavLink>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

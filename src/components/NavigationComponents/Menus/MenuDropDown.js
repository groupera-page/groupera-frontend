import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

export default function MenuDropDown({ userName = "Username" }) {
  const [openMenuDropDown, setOpenMenuDropDown] = useState(false);

  function handleMenuDropDown() {
    const openMenu = openMenuDropDown ? false : true;
    setOpenMenuDropDown(openMenu);
  }

  return (
    <div>
      <div
        className="flex items-center justify-end cursor-pointer relative "
        onClick={handleMenuDropDown}
      >
        <div className=" border-l border-gray-300 h-8  "></div>
        <div className="text-xs mx-2 ">{userName}</div>
        <AiOutlineDown className={` text-TEXT_PRIMARY `} size={15} />
      </div>

      <div
        className={`transition-all duration-300 absolute -translate-x-8 top-14  w-fit  bg-BG_PRIMARY rounded-md border-2 shadow-md ${
          openMenuDropDown ? "opacity-100" : "opacity-0"
        } `}
      >
        <ul className="flex flex-col ">
          <li className="p-4"> Profil</li>
          <>
            <hr className="border-t border-gray-300" />
          </>
          <li className="p-4">Einstellungen</li>
          <>
            <hr className="border-t border-gray-300" />
          </>
          <li className="p-4">Abo & Zahlungen</li>
        </ul>
      </div>
    </div>
  );
}

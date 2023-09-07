import React, { useState } from "react";
import Linkbutton from "./Linkbutton";
import NavlinkItem from "./NavlinkItem";
import Searchbox from "./Searchbox";
import { ReactComponent as CloseOutline } from "../assets/close-outline.svg";
import { ReactComponent as MenuOutline } from "../assets/menu-outline.svg";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuClick = () => {
    setOpenMenu(false);
  };
  return (
    <div className="fixed bg-slate-50/90 flex justify-between items-center p-5 gap-2 text-gray-600 w-full">
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="cursor-pointer md:hidden"
      >
        <div>
          {openMenu ? (
            <CloseOutline alt="close" className="w-12" />
          ) : (
            <MenuOutline alt="open" className="w-12" />
          )}
        </div>
      </div>
      <ul
        className={`bg-slate-50/95 list-none md:flex md:gap-5 p-8 md:p-0 absolute top-full left-0 md:static md:left-auto md:top-auto md:pl-0 rounded ${
          openMenu
            ? "transition-all duration-300 ease-in opacity-100"
            : "md:opacity-100 opacity-0"
        }`}
      >
        {/* Menu items */}
        <NavlinkItem onClick={handleMenuClick} title="Startseite" route="/" />
        <NavlinkItem
          onClick={handleMenuClick}
          title="Gruppen"
          route="/groups"
        />
        <NavlinkItem onClick={handleMenuClick} title="Blog" route="/blog" />
        <NavlinkItem
          onClick={handleMenuClick}
          title="Priceübersicht"
          route="/price-overview"
        />
        <NavlinkItem
          onClick={handleMenuClick}
          title="Über uns"
          route="/about"
        />
      </ul>
      <div className="text-sm">WeTo</div>{" "}
      {/* Smaller font size on smaller screens */}
      <ul className="list-none flex gap-2 items-center text-xs lg:text-base">
        <li className="absolute translate-x-4 translate-y-14 md:translate-y-0 md:-translate-x-0 md:left-0 md:relative  ">
          <Searchbox title="Gruppe Suchen" />
        </li>

        <li className="md:my-0">
          <Linkbutton title="Anmelden" route="/" />
        </li>
        <li className="md:my-0">
          <Linkbutton
            title="Mitglied Werden"
            route="/"
            bgColor="bg-primarybutton"
            textColor="text-white"
          />
        </li>
      </ul>
    </div>
  );
}

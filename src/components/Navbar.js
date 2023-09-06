import React, { useState } from "react";
import Linkbutton from "./Linkbutton";
import NavlinkItem from "./NavlinkItem";
import Searchbox from "./Searchbox";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenuClick = () => {
    setOpenMenu(false);
  };
  return (
    <div className="relative bg-slate-50 flex justify-between items-center p-5 gap-2 text-gray-600">
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="cursor-pointer md:hidden"
      >
        <div>{openMenu ? "❎" : "🟰"}</div>
      </div>
      <ul
        className={`bg-slate-50 list-none md:flex md:gap-5 p-8 md:p-0 absolute top-full left-0 md:static md:left-auto 
      md:top-auto md:pl-0 rounded ${
        openMenu
          ? "transition-all duration-200 ease-in opacity-100"
          : "md:opacity-100 opacity-0"
      }`}
      >
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
      <div>WeTo</div>
      <ul className="list-none flex gap-4 items-center">
        <li>
          <Searchbox title="Gruppe Suchen" />
        </li>

        <li className="md:my-0  ">
          <Linkbutton title="Anmelden" route="/" />
        </li>
        <li className="md:my-0 ">
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

import React, { useState } from "react";
import Linkbutton from "./Linkbutton";
import Navbutton from "./Navbutton";
// import About from "../pages/About";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative bg-neutral-100/90 flex justify-between items-center p-5 gap-2">
      <div onClick={() => setOpen(!open)} className="cursor-pointer md:hidden">
        <div>{open ? "❎" : "🟰"}</div>
      </div>
      <ul
        className={`list-none md:flex md:gap-5 p-8 md:p-0 absolute top-full left-0 md:static md:left-auto 
      md:top-auto bg-neutral-100/90 md:pl-0  transition-all duration-200 ease-in rounded md:text-base text-lg ${
        open
          ? "opacity-100"
          : "md:opacity-100 opacity-0 transition-all duration-0"
      }`}
      >
        <li onClick={() => setOpen(false)} className="md:my-0 my-0">
          <Navbutton title="Startseite" route="/"></Navbutton>
        </li>
        <li onClick={() => setOpen(false)} className="md:my-0 my-7">
          <Navbutton title="Gruppen" route="/groups"></Navbutton>
        </li>
        <li onClick={() => setOpen(false)} className="md:my-0 my-7">
          <Navbutton title="Blog" route="/blog"></Navbutton>
        </li>
        <li onClick={() => setOpen(false)} className="md:my-0 my-7">
          <Navbutton title="Priceübersicht" route="/price-overview"></Navbutton>
        </li>
        <li onClick={() => setOpen(false)} className="md:my-0 my-7">
          <Navbutton title="Über uns" route="/about"></Navbutton>
        </li>
      </ul>
      <div>We.To</div>
      <ul className="list-none flex gap-4">
        <li>
          <input
            type="search"
            className="border-gray-500 border-2 rounded text-sm px-2 py-0.5"
          />
        </li>
        <li>
          <Linkbutton title="Anmelden"></Linkbutton>
        </li>
        <li>
          <Linkbutton title="Mitglied Werden"></Linkbutton>
        </li>
      </ul>
    </div>
  );
}

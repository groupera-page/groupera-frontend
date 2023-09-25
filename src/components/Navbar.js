import React, { useState, useEffect } from "react";
import logoSvg from "../assets/imgLogos/logoNoBg.svg";
import { NavLink as Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex flex-col fixed bg-primaryBg w-full z-50 shadow-md ">
      <div className="flex justify-end  p-2 lg:px-10 lg:p-3 gap-2  ">
        <Link to="/">
          {" "}
          <img src={logoSvg} alt="logo" className="w-28 " loading="lazy" />
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import NavigationItems from "../NavigationItems";
import logoSvg from "../../../assets/imgLogos/logoNoBg.svg";
import { Link } from "react-router-dom";

export default function MenuSidebar({ openMenuMobile, handleMenuMobile }) {
  return (
    <div className="bg-BG_PRIMARY border-r h-full fixed hidden lg:block z-50 ">
      <div className="flex justify-center my-5">
        <Link to="/">
          <img src={logoSvg} alt="logo" className="w-24" />
        </Link>
      </div>
      <div className="h-full shadow-RIGHT py-10">
        <NavigationItems
          handleMenuMobile={handleMenuMobile}
          openMenuMobile={openMenuMobile}
        />
      </div>
    </div>
  );
}

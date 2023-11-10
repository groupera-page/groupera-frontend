import React from "react";
import NavigationItems from "../NavigationItems";
import logoSvg from "../../../assets/imgLogos/logoNoBg.svg";

export default function MenuSidebar({ openMenuMobile, handleMenuMobile }) {
  return (
    <div className="bg-BG_PRIMARY border-t shadow-lg h-full fixed hidden lg:block">
      <div className="flex justify-center my-10">
        <img src={logoSvg} alt="logo" className=" w-20" />
      </div>
      <NavigationItems
        handleMenuMobile={handleMenuMobile}
        openMenuMobile={openMenuMobile}
      />
    </div>
  );
}

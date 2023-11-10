import React from "react";
import NavigationItems from "../NavigationItems";
import logoSvg from "../../../assets/imgLogos/logoNoBg.svg";

export default function MenuSidebar({ openMenuMobile, handleMenuMobile }) {
  return (
    <div className="bg-BG_PRIMARY border-r h-full fixed hidden lg:block">
      <div className="flex justify-center my-5 mb-16">
        <img src={logoSvg} alt="logo" className=" w-20" />
      </div>
      <div className="shadow-2xl h-full ">
        <NavigationItems
          handleMenuMobile={handleMenuMobile}
          openMenuMobile={openMenuMobile}
        />
      </div>
    </div>
  );
}

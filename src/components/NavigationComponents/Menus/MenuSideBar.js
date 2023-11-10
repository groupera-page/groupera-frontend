import React from "react";
import NavigationItems from "../NavigationItems";
import logoSvg from "../../../assets/imgLogos/logoNoBg.svg";

export default function MenuSidebar({ openMenuMobile, handleMenuMobile }) {
  return (
    <div className="bg-BG_PRIMARY border-r h-full fixed hidden lg:block z-10 ">
      <div className="flex justify-center my-5">
        <img src={logoSvg} alt="logo" className=" w-24" />
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

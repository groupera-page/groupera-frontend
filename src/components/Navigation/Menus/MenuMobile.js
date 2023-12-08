import React from "react";
import NavigationItems from "../NavigationItems";

export default function MenuMobile({ openMenuMobile, handleMenuMobile }) {
  return (
    <div
      className={`transition-all duration-300 absolute  bg-BG_PRIMARY z-10 ${
        openMenuMobile
          ? "opacity-100 left-0 lg:opacity-0"
          : "opacity-50 -left-full"
      } `}
    >
      <hr className="border-l border-BORDER_PRIMARY" />
      <div className="bg-BG_PRIMARY mt-5 lg:mt-0 h-screen w-screen flex-col justify-between">
        <NavigationItems
          handleMenuMobile={handleMenuMobile}
          openMenuMobile={openMenuMobile}
        />
      </div>
    </div>
  );
}

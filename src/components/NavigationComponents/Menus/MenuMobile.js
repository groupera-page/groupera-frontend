import React from "react";
import NavigationItems from "../NavigationItems";

export default function MenuMobile({ openMenuMobile }) {
  return (
    <div>
      <div
        className={`transition-all duration-300 absolute  bg-BG_PRIMARY z-10 ${
          openMenuMobile ? "opacity-100 left-0" : "opacity-50 -left-full"
        } `}
      >
        <hr className="border-t border-gray-300" />
        <div className="bg-BG_PRIMARY h-screen w-screen flex-col justify-between">
          <NavigationItems />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import SideBarItems from "./SideBarItems";

export default function MobileMenu({ openMenu }) {
  return (
    <div>
      <div
        className={`transition-all duration-300 ${
          openMenu ? "opacity-100 left-0" : "opacity-50 -left-full"
        } absolute   bg-BG_PRIMARY z-10`}
      >
        <hr className="border-t border-gray-300" />
        <div className="bg-BG_PRIMARY h-screen w-screen flex-col justify-between">
          <SideBarItems></SideBarItems>
        </div>
      </div>
    </div>
  );
}

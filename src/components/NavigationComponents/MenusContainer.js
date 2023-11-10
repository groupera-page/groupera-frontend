import React, { useState } from "react";
import Navbar from "./Navbar";
import MenuMobile from "./Menus/MenuMobile";
import MenuSidebar from "./Menus/MenuSidebar";
export default function MenusContainer() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [openMenuDropDown, setOpenMenuDropDown] = useState(false);
  function handleMenuMobile(openMenuMobile) {
    setOpenMenuMobile(openMenuMobile);
  }
  function handleMenuDropDown() {
    const openMenu = openMenuDropDown ? false : true;
    setOpenMenuDropDown(openMenu);
  }
  return (
    <div className="lg:flex">
      <div className="w-48 absolute h-screen">
        <MenuSidebar
          openMenuMobile={openMenuMobile}
          handleMenuMobile={handleMenuMobile}
        />
      </div>

      <Navbar
        handleMenuMobile={handleMenuMobile}
        handleMenuDropDown={handleMenuDropDown}
        openMenuMobile={openMenuMobile}
      />
      <MenuMobile
        openMenuMobile={openMenuMobile}
        handleMenuMobile={handleMenuMobile}
      />
      {/* Rest of your content */}
    </div>
  );
}

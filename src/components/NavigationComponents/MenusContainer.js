import React, { useState } from "react";
import Navbar from "./Navbar";
import MenuMobile from "./Menus/MenuMobile";
export default function MenuContainer() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [openMenuDropDown, setOpenMenuDropDown] = useState(false);
  function handleMenuMobile(openMenuMobile) {
    console.log("TOGGLE MENU");
    setOpenMenuMobile(openMenuMobile);
  }
  function handleMenuDropDown() {
    const openMenu = openMenuDropDown ? false : true;
    setOpenMenuDropDown(openMenu);
  }
  return (
    <div>
      <Navbar
        handleMenuMobile={handleMenuMobile}
        handleMenuDropDown={handleMenuDropDown}
        openMenuMobile={openMenuMobile}
      />
      <MenuMobile
        openMenuMobile={openMenuMobile}
        handleMenuMobile={handleMenuMobile}
      />
    </div>
  );
}

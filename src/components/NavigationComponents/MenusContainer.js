import React, { useState } from "react";
import Navbar from "./Navbar";
import MenuMobile from "./Menus/MenuMobile";
export default function MenuContainer() {
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
    <div>
      <Navbar
        handleMenuMobile={handleMenuMobile}
        handleMenuDropDown={handleMenuDropDown}
      />
      <MenuMobile openMenuMobile={openMenuMobile} />
    </div>
  );
}

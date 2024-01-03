import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MenuMobile from "./Menus/MenuMobile";
import MenuSidebar from "./Menus/MenuSideBar";
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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (openMenuMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenuMobile]);

  return (
    <>
      <MenuSidebar
        openMenuMobile={openMenuMobile}
        handleMenuMobile={handleMenuMobile}
      />
      <Navbar
        handleMenuMobile={handleMenuMobile}
        handleMenuDropDown={handleMenuDropDown}
        openMenuMobile={openMenuMobile}
      />
      <MenuMobile
        openMenuMobile={openMenuMobile}
        handleMenuMobile={handleMenuMobile}
      />
    </>
  );
}

import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

export default function MenuContainer() {
  const [openMenu, setOpenMenu] = useState(false);
  function handleMobileMenu(openMenu) {
    setOpenMenu(openMenu);
  }
  return (
    <div>
      <Navbar handleMobileMenu={handleMobileMenu} />
      <MobileMenu openMenu={openMenu} />
    </div>
  );
}

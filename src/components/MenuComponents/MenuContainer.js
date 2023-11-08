import React, { useState } from "react";
import Navbar from "./Navbar";
import MenuMobile from "./MenuMobile";
import MenuDropDown from "./MenuDropDown";
export default function MenuContainer() {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  function handleMenuMobile(openMenuMobile) {
    setOpenMenuMobile(openMenuMobile);
  }
  return (
    <div>
      <Navbar handleMenuMobile={handleMenuMobile} />
      <MenuMobile openMenuMobile={openMenuMobile} />
    </div>
  );
}

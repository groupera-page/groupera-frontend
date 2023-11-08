import Navbar from "../components/MenuComponents/Navbar";
import MobileMenu from "../components/MenuComponents/MobileMenu";
import React, { useState } from "react";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  function handleMobileMenu(openMenu) {
    setOpenMenu(openMenu);
  }

  return (
    <div>
      <Navbar handleMobileMenu={handleMobileMenu} />
      <MobileMenu openMenu={openMenu} />
      <div className="bg-BG_PRIMARY"></div>
    </div>
  );
}

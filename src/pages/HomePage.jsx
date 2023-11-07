import Navbar from "../components/Navbar";
import NavMobileMenu from "../components/NavMobileMenu";
import React, { useState } from "react";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);
  function handleMobileMenu(openMenu) {
    setOpenMenu(openMenu);
  }

  return (
    <div>
      <Navbar handleMobileMenu={handleMobileMenu}></Navbar>
      <NavMobileMenu openMenu={openMenu}></NavMobileMenu>
      <div className="bg-primaryBg"></div>
    </div>
  );
}

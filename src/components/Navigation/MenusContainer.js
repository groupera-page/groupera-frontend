import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import MenuMobile from "./Menus/MenuMobile";
import MenuSidebar from "./Menus/MenuSideBar";
import { useSelector } from "react-redux";
import { selectAuth } from "../../features/auth/authSlice";
import { useLocation } from "react-router-dom";

export default function MenusContainer() {
  const { user } = useSelector(selectAuth);
  const location = useLocation();
  const isMeetingRoute = location.pathname.includes("meeting/");
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [openMenuDropDown, setOpenMenuDropDown] = useState(false);
  function handleMenuMobile(openMenuMobile) {
    setOpenMenuMobile(openMenuMobile);
  }
  function handleMenuDropDown() {
    const openMenu = openMenuDropDown ? false : true;
    setOpenMenuDropDown(openMenu);
  }
  console.log(isMeetingRoute);
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (openMenuMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMenuMobile]);

  return user && !isMeetingRoute ? (
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
  ) : null;
}

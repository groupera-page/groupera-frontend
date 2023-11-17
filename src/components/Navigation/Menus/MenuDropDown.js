import React, { useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import HoverUnderline from "../../Effects/HoverUnderline";
export default function MenuDropDown({
  title = "Username",
  openMenuMobile,
  topOffset = 16,
  xOffset,
  isButtonDropDown = false,
  children,
}) {
  const [openMenuDropDown, setOpenMenuDropDown] = useState(false);
  function handleMenuDropDown() {
    console.log("Dropdown clicked");
    if (!openMenuMobile) {
      const openMenu = openMenuDropDown ? false : true;
      setOpenMenuDropDown(openMenu);
    }
  }

  function handleCloseThisMenu() {
    setOpenMenuDropDown(false);
  }

  return (
    <div className="h-full ">
      {openMenuDropDown && (
        <div
          className="fixed bg-transparent top-0 left-0 w-full h-full"
          onClick={handleCloseThisMenu}
        ></div>
      )}
      <div className=" relative h-full" onClick={handleMenuDropDown}>
        {isButtonDropDown ? (
          <PrimaryButton>
            <div
              className={`flex items-center cursor-pointer transition-all duration-300 h-full ${
                openMenuMobile ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="text-xs mr-2 ">{title}</div>
              {openMenuDropDown && (
                <AiOutlineUp className={` text-BG_PRIMARY `} size={15} />
              )}
              {!openMenuDropDown && (
                <AiOutlineDown className={` text-BG_PRIMARY  `} size={15} />
              )}
            </div>
          </PrimaryButton>
        ) : (
          <div
            className={`flex items-center cursor-pointer transition-all duration-300 h-full ${
              openMenuMobile ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="flex text-TEXT_PRIMARY hover:text-PURPLE_PRIMARY">
              <div className="text-xs mr-2 ">{title}</div>
              {openMenuDropDown && <AiOutlineUp size={15} />}
              {!openMenuDropDown && <AiOutlineDown size={15} />}
            </div>
          </div>
        )}

        <div
          className={`transition-all duration-300 absolute -translate-x-${xOffset}
          }   top-${topOffset}  bg-BG_PRIMARY rounded-md shadow-xl border ${
            openMenuDropDown ? "opacity-100" : "opacity-0 "
          } `}
        >
          {openMenuDropDown && (
            <ul className="flex flex-col w-fit" onClick={handleCloseThisMenu}>
              {children}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

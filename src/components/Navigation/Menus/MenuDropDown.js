import React, { useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import HoverUnderline from "../../Effects/HoverUnderline";

export default function MenuDropDown({
  title,
  openMenuMobile,
  topOffset,
  isButtonDropDown = false,
  children,
}) {
  const [openMenuDropDown, setOpenMenuDropDown] = useState(false);

  function handleMenuDropDown() {
    if (!openMenuMobile) {
      setOpenMenuDropDown(!openMenuDropDown);
    }
  }

  function handleCloseThisMenu() {
    setOpenMenuDropDown(false);
  }

  return (
    <div className="relative h-full">
      {openMenuDropDown && (
        <div
          className="fixed bg-transparent top-0 left-0 w-full h-full"
          onClick={handleCloseThisMenu}
        ></div>
      )}

      <div
        className={`relative h-full ${
          openMenuMobile ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleMenuDropDown}
      >
        {isButtonDropDown ? (
          <PrimaryButton>
            <div className="flex items-center cursor-pointer transition-all duration-300">
              <div className="mr-2 ">{title}</div>
              {openMenuDropDown ? (
                <AiOutlineUp className="text-BG_PRIMARY" size={12} />
              ) : (
                <AiOutlineDown className="text-BG_PRIMARY" size={12} />
              )}
            </div>
          </PrimaryButton>
        ) : (
          <div
            className={`flex items-center cursor-pointer transition-all duration-300 h-full `}
          >
            <div className="flex text-TEXT_PRIMARY items-center ">
              <div className="mx-2 paragraph-lg relative">
                <div className="group text-lg line-clamp-1">
                  {title} <HoverUnderline />
                </div>
              </div>

              {openMenuDropDown ? (
                <AiOutlineUp size={12} className="text-TEXT_PRIMARY mr-2" />
              ) : (
                <AiOutlineDown size={12} className="text-TEXT_PRIMARY mr-2" />
              )}
            </div>
          </div>
        )}

        <div
          className={`transition-all duration-300 absolute bg-BG_PRIMARY rounded-md border top-${topOffset}  ${
            openMenuDropDown
              ? "opacity-100 -right-0 left-auto"
              : "opacity-0 left-full text-sm"
          } `}
        >
          {openMenuDropDown && (
            <ul
              className="flex flex-col w-fit bg-BG_GRAY"
              onClick={handleCloseThisMenu}
            >
              {children}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

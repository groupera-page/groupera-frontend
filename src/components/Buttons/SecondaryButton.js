import React from "react";

export default function SecondaryButton({
  type = "button",
  handleButtonClick,
  isInversed = false,
  children,
  isLarge,
}) {
  return (
    <button
      type={type}
      onClick={handleButtonClick}
      className={`px-4 py-1.5 ${
        isLarge ? "text-lg lg:text-base" : "text-base lg:text-sm"
      } w-fit whitespace-nowrap ${
        isInversed
          ? "text-BLUE_PRIMARY hover:bg-PURPLE_PRIMARY rounded-md hover:shadow-md"
          : ` hover:bg-BLUE_SECONDARY bg-BLUE_PRIMARY border border-BLUE_PRIMARY rounded-md text-white hover:shadow-md`
      }`}
    >
      {children}
    </button>
  );
}

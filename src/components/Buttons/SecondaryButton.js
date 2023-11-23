import React from "react";

export default function SecondaryButton({
  type = "button",
  handleButtonClick,
  isInversed = false,
  children,
}) {
  return (
    <button
      type={type}
      onClick={handleButtonClick}
      className={`px-3 py-2 text-sm w-fit whitespace-nowrap ${
        isInversed
          ? "text-BLUE_PRIMARY hover:bg-PURPLE_PRIMARY rounded-md hover:shadow-md"
          : ` hover:bg-BLUE_SECONDARY bg-BLUE_PRIMARY rounded-md text-white hover:shadow-md`
      }`}
    >
      {children}
    </button>
  );
}

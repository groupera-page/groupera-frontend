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
      className={`p-2 text-sm w-fit ${
        isInversed
          ? "text-BLUE_PRIMARY hover:bg-PURPLE_PRIMARY rounded-md"
          : ` hover:text-slate-600 bg-BLUE_PRIMARY rounded-md text-white`
      }`}
    >
      {children}
    </button>
  );
}

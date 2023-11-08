import React from "react";

export default function PrimaryButton({
  type = "button",
  handleButtonClick,
  isInversed = false,
  children,
}) {
  return (
    <button
      type={type}
      onClick={handleButtonClick}
      className={`px-4 py-2 ${
        isInversed
          ? "text-BLUE_PRIMARY hover:bg-PURPLE_PRIMARY rounded-md"
          : ` hover:text-slate-600 bg-BLUE_PRIMARY rounded-md text-white`
      }`}
    >
      {children}
    </button>
  );
}
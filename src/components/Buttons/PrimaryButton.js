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
      className={` p-2 text-sm w-fit whitespace-nowrap ${
        isInversed
          ? "text-PURPLE_PRIMARY hover:text-PURPLE_SECONDARY rounded-md border border-PURPLE_PRIMARY hover:border-PURPLE_SECONDARY hover:shadow-md"
          : "text-slate-100 hover:text-white bg-PURPLE_PRIMARY rounded-md border border-PURPLE_PRIMARY hover:bg-PURPLE_SECONDARY hover:shadow-md"
      }`}
    >
      {children}
    </button>
  );
}

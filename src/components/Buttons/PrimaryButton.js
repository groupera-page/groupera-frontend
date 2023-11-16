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
          ? "text-PURPLE_PRIMARY rounded-md border border-PURPLE_PRIMARY"
          : "text-slate-100 hover:text-white bg-PURPLE_PRIMARY rounded-md border border-PURPLE_PRIMARY"
      }`}
    >
      {children}
    </button>
  );
}

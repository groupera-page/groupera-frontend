import React from "react";

export default function PrimaryButton({
  type = "button",
  handleButtonClick,
  isInversed = false,
  children,
  isLarge,
  border = true,
  stretch = false,
}) {
  return (
    <button
      type={type}
      onClick={handleButtonClick}
      className={`${stretch ? "w-full" : ""} px-3 py-1.5 ${
        isLarge ? "text-lg lg:text-base" : "text-base lg:text-sm"
      } font-normal w-fit whitespace-nowrap ${border ? "border" : ""} ${
        isInversed
          ? "text-PURPLE_PRIMARY hover:text-PURPLE_SECONDARY rounded-md  border-PURPLE_PRIMARY hover:border-PURPLE_SECONDARY hover:shadow-md"
          : "text-slate-100 hover:text-white bg-PURPLE_PRIMARY rounded-md  border-PURPLE_PRIMARY hover:bg-PURPLE_SECONDARY hover:shadow-md"
      }`}
    >
      {children}
    </button>
  );
}

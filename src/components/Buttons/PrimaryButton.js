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
      className={`whitespace-no-wrap px-2 py-2 ${
        isInversed
          ? "text-PURPLE_PRIMARY hover:bg-PURPLE_PRIMARY-hover rounded-md"
          : "text-slate-100 hover:text-white bg-PURPLE_PRIMARY rounded-md"
      }`}
    >
      {children}
    </button>
  );
}

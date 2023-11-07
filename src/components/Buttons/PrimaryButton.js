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
          ? "text-primarypurple hover-bg-primarypurple-hover rounded-md"
          : "text-slate-100 hover:text-white bg-primarypurple rounded-md"
      }`}
    >
      {children}
    </button>
  );
}

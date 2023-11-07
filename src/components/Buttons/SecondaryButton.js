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
          ? "text-primaryblue hover-bg-primarypurple-hover rounded-md"
          : ` hover:text-slate-600 bg-primaryblue rounded-md text-white`
      }`}
    >
      {children}
    </button>
  );
}

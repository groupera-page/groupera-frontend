import React from "react";

export default function PrimaryButton({
  type,
  handleButtonClick,
  isInversed,
  children,
}) {
  return (
    <button
      type={type}
      onClick={handleButtonClick}
      className={
        isInversed
          ? "text-primarypurple hover-bg-primarypurple-hover px-4"
          : `text-slate-100 hover:text-white bg-primarypurple px-4 rounded-lg`
      }
    >
      {children}
    </button>
  );
}

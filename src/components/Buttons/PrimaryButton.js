import React from "react";

export default function PrimaryButton({ type, handleButtonClick, children }) {
  return (
    <button
      type={type}
      onClick={handleButtonClick}
      className={`text-slate-100 hover:text-white bg-primarypurple px-4 rounded-lg`}
    >
      {children}
    </button>
  );
}

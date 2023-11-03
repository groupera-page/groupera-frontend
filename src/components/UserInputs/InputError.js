import React from "react";
import { AiOutlineWarning } from "react-icons/ai";

export default function InputError({ showMessage, errorMessage }) {
  return (
    <div
      className={`transform rounded-md border-2 transition-all ease-in-out duration-300 ${
        showMessage ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
      }`}
    >
      {showMessage && (
        <div className="bg-white p-1 text-primarypurple text-sm">
          <div className="flex items-center">
            <AiOutlineWarning className="text-red text-primarybg" size={32} />
            <span className="ml-2">{errorMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}

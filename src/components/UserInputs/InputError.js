import React from "react";
import { AiOutlineWarning } from "react-icons/ai";

export default function InputError({ showMessage, errorMessage }) {
  return (
    <div
      className={`transform rounded-md border- bg-primaryBg transition-all ease-in-out duration-300 ${
        showMessage ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
      }`}
    >
      {showMessage && (
        <div className=" p- text-primarypurple text-sm bg-primaryBg">
          <div className="flex items-center bg-primaryBg">
            <AiOutlineWarning
              className="text-red text-primarybg bg-primaryBg"
              size={28}
            />
            <span className="ml-1 bg-primaryBg">{errorMessage}</span>
          </div>
        </div>
      )}
    </div>
  );
}

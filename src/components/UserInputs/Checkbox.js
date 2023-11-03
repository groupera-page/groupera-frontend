import React from "react";
import { BsCheckLg } from "react-icons/bs";

export default function Checkbox({ value, onChange }) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer mr-3 ">
      <input
        type="checkbox"
        value={value}
        onChange={onChange}
        className="hidden"
      />
      <div className="w-7 h-7 border-2 border-primarypurple rounded-md flex items-center justify-center ">
        <div
          className={`transform rounded-md border- transition-all ease-in-out duration-300 ${
            value ? " opacity-100" : " opacity-0"
          }`}
        >
          <BsCheckLg
            className={`text-primarypurple rounded-md ${
              value ? "opacity-100" : "opacity-0"
            }`}
            style={{ fontSize: "1.8em" }}
          />
        </div>
      </div>
    </label>
  );
}

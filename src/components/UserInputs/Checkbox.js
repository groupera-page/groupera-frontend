import React from "react";
import { BsCheckLg } from "react-icons/bs";

const Checkbox = ({ value, onChange }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        value={value}
        onChange={onChange}
        className="hidden"
      />
      <span className="w-7 h-7 border-2 border-primarypurple rounded-md transition-all duration-300 flex items-center justify-center">
        {value && (
          <BsCheckLg
            className="text-primarypurple rounded-md "
            style={{ fontSize: "2em" }}
          />
        )}
      </span>
      <span className="text-gray-700  "></span>
    </label>
  );
};

export default Checkbox;

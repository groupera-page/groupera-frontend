import React from "react";

export default function TextInput({ value, onChange, placeholder, maxLength }) {
  return (
    <div className=" text-sm border border-primaryblue rounded-md">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full border rounded-md p-2 placeholder-primaryText bg-primaryBg"
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </div>
  );
}

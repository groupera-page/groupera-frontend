import React from "react";

export default function CodeInput({ value, inputRef, handleChange }) {
  return (
    <input
      ref={inputRef}
      type="text"
      name="codebox"
      className="border rounded-md p-1 w-20 border-primaryblue text-lg text-center bg-primaryBg"
      placeholder=""
      value={value}
      maxLength="1"
      onChange={handleChange}
    />
  );
}

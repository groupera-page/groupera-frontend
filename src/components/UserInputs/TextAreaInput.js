import React from "react";

export default function TextAreaInput({
  name,
  value,
  onChange,
  placeholder,
  maxLength,
  height,
}) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="w-full h-28 border border-BLUE_PRIMARY rounded-md p-2 placeholder-TEXT_PRIMARY resize-none text-sm bg-BG_PRIMARY"
      placeholder={placeholder}
      maxLength={maxLength}
      height={height}
    ></textarea>
  );
}

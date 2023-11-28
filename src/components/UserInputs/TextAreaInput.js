import React from "react";

export default function TextAreaInput({
  name,
  value,
  onChange,
  placeholder,
  maxLength,
  height = 28,
}) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full h-36 border border-TEXT_LIGHTGRAY rounded-md p-4 placeholder-TEXT_PRIMARY resize-none text-base bg-BG_PRIMARY`}
      placeholder={placeholder}
      maxLength={maxLength}
      height={height}
    ></textarea>
  );
}

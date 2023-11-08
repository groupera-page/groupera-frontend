import React from "react";

export default function TextAreaInput({
  name,
  value,
  onChange,
  placeholder,
  maxLength,
}) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-BLUE_PRIMARY rounded-md p-2 placeholder-TEXT_PRIMARY h-20 resize-none text-sm bg-BG_PRIMARY"
      placeholder={placeholder}
      maxLength={maxLength}
    ></textarea>
  );
}

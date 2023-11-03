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
      className="w-full border border-primaryblue rounded-md p-2 placeholder-primaryText h-20 resize-none text-sm bg-primaryBg"
      placeholder={placeholder}
      maxLength={maxLength}
    ></textarea>
  );
}

import React from "react";

export default function TextInput({
  value,
  onChange,
  placeholder,
  maxLength,
  onFocusOut,
}) {
  return (
    <div className=" text-sm border border-BLUE_PRIMARY rounded-md">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full border rounded-md p-2 placeholder-TEXT_PRIMARY bg-BG_PRIMARY"
        placeholder={placeholder}
        maxLength={maxLength}
        onBlur={onFocusOut}
      />
    </div>
  );
}

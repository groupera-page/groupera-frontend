import React from "react";

export default function PasswordInput({
  value,
  onChange,
  placeholder,
  onFocusOut,
}) {
  return (
    <div className="mt-4 text-sm border border-primaryblue rounded-md">
      <input
        type="password"
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-md placeholder-primaryText bg-primaryBg"
        placeholder={placeholder}
        onBlur={onFocusOut}
      />
    </div>
  );
}

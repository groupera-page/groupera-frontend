import React from "react";

export default function Searchbox({ title }) {
  const defaultText = title;
  return (
    <input
      type="search"
      className="border-gray-500 border-2 rounded text-sm px-2 py-0.5"
      defaultValue={defaultText}
      onFocus={(e) => {
        if (e.target.value === defaultText) {
          e.target.value = ""; // Clear the input when it receives focus
        }
      }}
      onBlur={(e) => {
        if (e.target.value === "") {
          e.target.value = defaultText; // Restore the default text when it loses focus and is empty
        }
      }}
    />
  );
}

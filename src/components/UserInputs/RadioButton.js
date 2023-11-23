import React from "react";

export default function RadioButton({
  id,
  title,
  checkedVariable,
  onChange,
  fullSize = true,
}) {
  return (
    <label
      htmlFor={id}
      className={`relative cursor-pointer border border-BLUE_PRIMARY rounded-md text-xs p-4 flex items-center gap-4`}
    >
      <div>{title}</div>
      <input
        type="radio"
        id={id}
        name="options"
        value={title}
        checked={checkedVariable === title}
        onChange={onChange}
        className="mr-1 absolute end-1 md:end-6"
      />
    </label>
  );
}

import React from "react";

export default function RadioButton({ id, title, checkedVariable, onChange }) {
  return (
    <label
      htmlFor={id}
      className={`relative cursor-pointer border border-BLUE_PRIMARY rounded-md text-base py-3 px-4 flex items-center gap-4 hover:shadow-md`}
    >
      <div>{title}</div>
      <input
        className="mr-1 absolute end-1 md:end-6 h-5 w-5 appearance-none rounded-full border before:pointer-events-none before:rounded-full checked:border-PURPLE_PRIMARY hover:cursor-pointer hover:before:opacity-[0.07] checked:border-4 focus:outline-none focus:ring-0 border-TEXT_LIGHTGRAY "
        type="radio"
        id={id}
        name="options"
        value={title}
        checked={checkedVariable === title}
        onChange={onChange}
        // className="mr-1 absolute end-1 md:end-6"
      />
    </label>
  );
}

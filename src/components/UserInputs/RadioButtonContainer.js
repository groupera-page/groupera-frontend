import React from "react";
import RadioButton from "./RadioButton";

export default function RadioButtonContainer({
  title = "",
  name,
  options,
  checkedVariable,
  onChange,
}) {
  return (
    <div>
      <div className="paragraph-lg mt-4 mb-2 ">{title}</div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
        {options.map((option, index) => (
          <RadioButton
            key={index}
            id={`freq` + index}
            title={option}
            name={name}
            checkedVariable={checkedVariable}
            onChange={() => onChange(option)}
          />
        ))}
      </div>
    </div>
  );
}

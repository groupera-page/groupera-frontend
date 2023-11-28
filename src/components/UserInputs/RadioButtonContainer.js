import React from "react";
import RadioButton from "./RadioButton";

export default function RadioButtonContainer({
  name,
  options,
  checkedVariable,
  onChange,
}) {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-2 gap-3">
        {options.map((option, index) => (
          <RadioButton
            key={index}
            id={name + index}
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

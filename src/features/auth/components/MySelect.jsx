import React from "react";
import { useNavigate } from "react-router-dom";

const MySelect = ({
  input,
  label,
  hint,
  type,
  options,
  meta: { touched, error },
}) => {
  const isMultiSelect = () => type.toLowerCase().includes("multiselect");
  const navigate = useNavigate();

  const handleOnChange = (e, opt) => {
    if (opt.onClick) {
      opt.onClick(navigate);
    }
    if (!isMultiSelect()) {
      return input.onChange(opt.value);
    }

    const newValue = [...input.value];
    if (e.target.checked) {
      newValue.push(opt.value);
    } else {
      newValue.splice(newValue.indexOf(opt.value), 1);
    }

    return input.onChange(newValue);
  };

  return (
    <div>
      {label && <label>{label}</label>}
      {options.map((opt, idx) => (
        <label
          key={idx}
          htmlFor={`opt-${idx}`}
          className={`relative cursor-pointer border my-2 ${
            Array.isArray(input.value)
              ? input.value.indexOf(opt.value) !== -1
                ? "border-PURPLE_PRIMARY"
                : "border-BORDER_PRIMARY"
              : input.value === opt.value
              ? "border-PURPLE_PRIMARY"
              : "border-BORDER_PRIMARY"
          } rounded-md text-base py-3 px-4 flex items-center gap-4 hover:shadow-md`}
        >
          <div className="pr-8">{opt.label}</div>
          <input
            type={isMultiSelect() ? "checkbox" : "radio"}
            id={`opt-${idx}`}
            name={`${input.name}[${idx}]`}
            value={opt.value}
            checked={
              Array.isArray(input.value)
                ? input.value.indexOf(opt.value) !== -1
                : input.value === opt.value
            }
            onChange={(event) => handleOnChange(event, opt)}
            className="mx-1 absolute end-1 md:end-5 h-5 w-5 appearance-none rounded-full border before:pointer-events-none before:rounded-full checked:border-PURPLE_PRIMARY hover:cursor-pointer hover:before:opacity-[0.07] checked:border-4 focus:outline-none focus:ring-0 border-BORDER_PRIMARY "
          />
        </label>
      ))}
      {hint && <span className="text-xs text-slate-500">{hint}</span>}
      {touched && error && <div className="footer error">{error}</div>}
    </div>
  );
};

export default MySelect;

import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineWarning } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

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
      <div className="paragraph-lg my-1.5">{label}</div>
      {options.map((opt, idx) => (
        <label
          key={idx}
          htmlFor={`opt-${opt.value}`}
          className={`relative cursor-pointer my-2 border ${
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
            id={`opt-${opt.value}`}
            name={`${input.name}[${idx}]`}
            value={opt.value}
            checked={
              Array.isArray(input.value)
                ? input.value.indexOf(opt.value) !== -1
                : input.value === opt.value
            }
            onChange={(event) => handleOnChange(event, opt)}
            className={`mx-1 absolute end-1 md:end-5 h-5 w-5 appearance-none bg-BG_GRAY ${
              isMultiSelect()
                ? "checked:bg-PURPLE_PRIMARY rounded-sm "
                : " rounded-full hover:cursor-pointer hover:before:opacity-[0.07] checked:border-4 focus:outline-none focus:ring-0"
            } border before:pointer-events-none before:rounded-full checked:border-PURPLE_PRIMARY  border-BORDER_PRIMARY `}
          />
          {isMultiSelect() && (
            <BsCheckLg
              className={`absolute end-2 md:end-6 rounded-md text-BG_GRAY`}
              size={20}
            />
          )}
        </label>
      ))}

      {touched && error && (
        <div className="flex px-4 gap-2 items-right bg-BG_PRIMARY text-PURPLE_PRIMARY border border-PURPLE_PRIMARY rounded-md p-1 my-1">
          <div>
            <AiOutlineWarning size={26} />
          </div>
          {error}
        </div>
      )}
      {hint && <span className="paragraph-tiny my-1">{hint}</span>}
    </div>
  );
};

export default MySelect;

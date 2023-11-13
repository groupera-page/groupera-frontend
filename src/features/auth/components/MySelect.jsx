import React from "react";

const MySelect = ({
                        input,
                        label,
                        hint,
                        type,
                        options,
                        meta: {touched, error},
                      }) => {

  const isMultiSelect = () => type.toLowerCase().includes("multiselect")

  const handleOnChange = (e, opt) => {
    if (!isMultiSelect()) {
      return input.onChange(opt.value)
    }

    const newValue = [...input.value];
    if (e.target.checked) {
      newValue.push(opt.value);
    } else {
      newValue.splice(newValue.indexOf(opt.value), 1);
    }

    return input.onChange(newValue);
  }

  return (
    <div>
      {
        label && <label>{label}</label>
      }
      {
        options.map((opt, idx) => (
          <div key={idx}>
            <label>
              <input type={isMultiSelect() ? "checkbox" : "radio"}
                     name={`${input.name}[${idx}]`}
                     value={opt.value}
                     checked={Array.isArray(input.value) ? input.value.indexOf(opt.value) !== -1 : input.value === opt.value}
                     onChange={(event) => handleOnChange(event, opt)}
              />
              {opt.label}
            </label>
          </div>
        ))
      }
      {
        hint &&
        <span className="text-xs text-slate-500">{hint}</span>
      }
      {touched && error && <div className="footer error">{error}</div>}
    </div>
  )
}

export default MySelect;

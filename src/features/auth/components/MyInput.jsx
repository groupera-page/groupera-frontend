import React from "react";

const MyInput = ({
                       input,
                       label,
                       placeholder,
                       type,
                       hint,
                       meta: { touched, error }
                     }) => {
  return(
    <div>
      <label>{label}</label>
      <div className="text-sm border border-primaryblue rounded-md">
        <input
          {...input}
          placeholder={placeholder || label}
          type={type}
          className="w-full border rounded-md p-2 placeholder-primaryText bg-primaryBg"
        />
      </div>
      {
        hint &&
        <span className="text-xs text-slate-500">{hint}</span>
      }
      {touched && error && <div className="footer error">{error}</div>}
    </div>
  )
}

export default MyInput;

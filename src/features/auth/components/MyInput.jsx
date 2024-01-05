import React from "react";
import ErrorField from "./ErrorField";

const MyInput = ({
  input,
  label,
  placeholder,
  type,
  hint,
  min,
  meta: { touched, error },
}) => (
  <div className="my-2.5">
    <div className="paragraph-lg my-1.5">{label}</div>
    <div>
      <input
        {...input}
        placeholder={placeholder || label}
        type={type}
        min={min}
        className="w-full paragraph-md rounded-md py-2 px-4  placeholder-TEXT_PRIMARY bg-BG_PRIMARY border border-BORDER_PRIMARY"
      />
    </div>

    {touched && error && <ErrorField errorText={error} />}
    {hint && <p className="paragraph-tiny my-1">{hint}</p>}
  </div>
);

export default MyInput;

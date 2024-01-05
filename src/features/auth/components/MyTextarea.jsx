import React from "react";
import ErrorField from "./ErrorField";

const MyTextarea = ({
  input,
  label,
  placeholder,
  hint,
  meta: { touched, error },
  maxLength,
}) => {
  const handleTextareaChange = (e) => {
    if (!maxLength) return input.onChange(e);

    const newValue = e.target.value;
    if (newValue.length > maxLength) return;
    return input.onChange(e);
    // setCharCount(inputValue.length);
  };

  return (
    <div className="my-2.5">
      <div className="paragraph-lg my-1.5">{label}</div>
      <textarea
        {...input}
        placeholder={placeholder || label}
        maxLength={500}
        onChange={handleTextareaChange}
        className="w-full h-36 resize-none paragraph-md rounded-md py-2 px-4  placeholder-TEXT_PRIMARY bg-BG_PRIMARY border border-BORDER_PRIMARY"
      />
      {maxLength && (
        <div className="text-right paragraph-tiny">
          {input.value.length}/{maxLength}
        </div>
      )}
      {touched && error && <ErrorField errorText={error} />}
      {hint && <p className="paragraph-tiny my-1">{hint}</p>}
    </div>
  );
};

export default MyTextarea;

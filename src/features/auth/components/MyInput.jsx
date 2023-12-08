import React from "react";
import { AiOutlineWarning } from "react-icons/ai";

const MyInput = ({
  input,
  label,
  placeholder,
  type,
  hint,
  meta: { touched, error },
}) => {
  return (
    <div className="my-2.5">
      <div className="paragraph-lg my-1.5">{label}</div>
      <div>
        <input
          {...input}
          placeholder={placeholder || label}
          type={type}
          className="w-full rounded-md p-2 placeholder-TEXT_PRIMARY bg-BG_PRIMARY border border-BORDER_PRIMARY"
        />
      </div>

      {touched && error && (
        <div className="flex px-2 text-right gap-2 items-right bg-BG_PRIMARY text-PURPLE_PRIMARY border border-PURPLE_PRIMARY rounded-md p-1 my-1">
          <div>
            <AiOutlineWarning className="text-red" size={26} />
          </div>
          {error}
        </div>
      )}
      {hint && <p className="px-1 text-TEXT_LIGHTGRAY">{hint}</p>}
    </div>
  );
};

export default MyInput;

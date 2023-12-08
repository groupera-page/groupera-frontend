import React, { useState } from "react";
import { AiOutlineWarning } from "react-icons/ai";

const MyInput = ({
  input,
  label,
  placeholder,
  type,
  hint,
  meta: { touched, error },
}) => {
  const [charCount, setCharCount] = useState(
    input.value ? input.value.length : 0
  );

  const handleTextareaChange = (e) => {
    const inputValue = e.target.value;
    input.onChange(e);
    setCharCount(inputValue.length);
  };

  return (
    <div className="my-2.5">
      <div className="paragraph-lg my-1.5">{label}</div>
      {type === "textarea" ? (
        <div>
          <textarea
            {...input}
            placeholder={placeholder || label}
            type={type}
            maxLength={500}
            onChange={handleTextareaChange}
            className="w-full h-36 resize-none paragraph-md rounded-md py-2 px-4  placeholder-TEXT_PRIMARY bg-BG_PRIMARY border border-BORDER_PRIMARY"
          />
          <div className="text-right paragraph-tiny">{charCount}/500</div>
        </div>
      ) : (
        <div>
          <input
            {...input}
            placeholder={placeholder || label}
            type={type}
            className="w-full paragraph-md rounded-md py-2 px-4  placeholder-TEXT_PRIMARY bg-BG_PRIMARY border border-BORDER_PRIMARY"
          />
        </div>
      )}

      {touched && error && (
        <div className="flex px-4 text-right gap-2 items-right bg-BG_PRIMARY text-PURPLE_PRIMARY border border-PURPLE_PRIMARY rounded-md p-1 my-1">
          <div>
            <AiOutlineWarning className="text-red" size={26} />
          </div>
          {error}
        </div>
      )}
      {hint && <p className="paragraph-tiny my-1">{hint}</p>}
    </div>
  );
};

export default MyInput;

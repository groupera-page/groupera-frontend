import React, { useState } from "react";
import VerificationCodeInput from "./VerificationCodeInput";
import { AiOutlineWarning } from "react-icons/ai";

const VerificationCodeWrapper = ({
  codeLength = 4,
  input,
  hint,
  meta: { touched, error },
}) => {
  const emptyCode = Array(codeLength).fill("");
  const [code, setCode] = useState(emptyCode);

  const handleCode = (e, value, index) => {
    const newCode = [...code];
    const remainingFields = codeLength - index;
    const newValue = value.length ? value.split("", remainingFields) : [""];
    const newValueSize = value.length ? value.length : 1;
    const target = e.currentTarget;

    newCode.splice(index, newValueSize, ...newValue);
    setCode(newCode);
    input.onChange(newCode.join(""));

    if (value.length && value.length < codeLength && index !== codeLength - 1) {
      (target.nextElementSibling || null).focus();
    }
    if (index === codeLength - 1 && newCode.indexOf("") === -1) {
      target.blur();
    }
  };

  const handleKey = (e, index) => {
    const target = e.currentTarget;
    if (e.key === "Backspace" && target.value === "" && index) {
      (target.previousElementSibling || null).focus();
    }
    if (e.key === "ArrowLeft") {
      const prevElement = target.previousElementSibling || null;
      if (prevElement) prevElement.focus();
    }
    if (e.key === "ArrowRight") {
      const nextElement = target.nextElementSibling || null;
      if (nextElement) nextElement.focus();
    }
  };

  return (
    <div className="mx-10">
      <div className="flex justify-center gap-2 my-2">
        {code.map((char, index) => (
          <VerificationCodeInput
            // style={{ display: "flex", columnGap: "10px" }}
            key={index}
            handleCode={handleCode}
            handleKey={handleKey}
            char={char}
            index={index}
            maxLength={codeLength}
          />
        ))}
      </div>

      {touched && error && (
        <div className="flex px-4 text-right gap-2 items-right bg-BG_PRIMARY text-PURPLE_PRIMARY border border-PURPLE_PRIMARY rounded-md p-1 my-1">
          <div>
            <AiOutlineWarning className="text-red" size={26} />
          </div>
          {error}
        </div>
      )}
      {hint && <span className="paragraph-tiny">{hint}</span>}
    </div>
  );
};

export default VerificationCodeWrapper;

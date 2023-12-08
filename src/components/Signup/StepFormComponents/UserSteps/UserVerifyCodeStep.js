import React, { useState, useRef } from "react";
import CodeInput from "../../../UserInputs/CodeInput";
export default function UserVerifyCodeStep({ updateFields, resendCode }) {
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleInputChange = (index, value) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);
    updateFields({ code: updatedCode });

    if (value !== "" && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  function resendCodeHandler() {}
  return (
    <div>
      <h2 className=" mt-">Verifiziere deine Emailadresse</h2>
      <p className=" my-4">
        Wir haben Dir einen 4 stelligen Verifizierungscode per E-Mail geschickt.
        Bitte schau auch in deinem Spam nach.
      </p>
      <div className="flex justify-center mx-10 gap-2 my-6">
        {verificationCode.map((value, index) => (
          <CodeInput
            key={index}
            value={value}
            inputRef={inputRefs[index]}
            handleChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <span className="text-BLUE_LINK" onClick={resendCodeHandler}>
          Code erneut senden
        </span>
      </div>
    </div>
  );
}

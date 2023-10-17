import React, { useState, useRef } from "react";

export default function VerifyCodeForm() {
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleInputChange = (index, value) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value;
    setVerificationCode(updatedCode);

    if (value !== "" && index < 3) {
      inputRefs[index + 1].current.focus();
    }
    if (value === "") {
      if (index !== 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  return (
    <div>
      <h2 className="my- mx-2">Verifiziere deine Email adresse</h2>
      <p className="text-sm m-2">
        Wir haben Dir einen 4 stelligen Verifizierungscode per E-Mail an
        j**.***@outlook.com geschickt
      </p>
      <div className="flex justify-center m-5 gap-2">
        {verificationCode.map((value, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            name="codebox"
            className="border rounded-md p-2 w-20 border-primarypurple"
            placeholder=""
            value={value}
            maxLength="1"
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
    </div>
  );
}

import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function VerifyCodeForm({ email, code, updateFields }) {
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
    if (value === "") {
      if (index !== 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  return (
    <div>
      <h2 className="mx-2 mt-8">Verifiziere deine Email adresse</h2>
      <p className=" m-2">
        Wir haben Dir einen 4 stelligen Verifizierungscode per E-Mail geschickt.
      </p>
      <div className="flex justify-center m-10 gap-2">
        {verificationCode.map((value, index) => (
          <input
            key={index}
            ref={inputRefs[index]}
            type="text"
            name="codebox"
            className="border rounded-md p-2 w-20 border-primaryblue"
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

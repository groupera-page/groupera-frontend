import { useState } from 'react';
import VerificationCodeInput from './VerificationCodeInput';


const VerificationCodeInputs = ({codeLength}) => {
  const emptyCode = Array(codeLength).fill('');
  const [code, setCode] = useState(emptyCode);

  const handleCode = (e, value, index) => {
    const newCode = [...code];
    const remainingFields = codeLength - index;
    const newValue = value.length ? value.split('', remainingFields) : [''];
    const newValueSize = value.length ? value.length : 1;
    const target = e.currentTarget;

    newCode.splice(index, newValueSize , ...newValue);
    setCode(newCode);

    if(value.length && value.length < codeLength && index !== codeLength - 1) {
      (target.nextElementSibling || null).focus();
    }
    if(index === codeLength - 1 && newCode.indexOf("") === -1) {
      target.blur();
    }

  }

  const handleKey = (e, index) => {
    const target = e.currentTarget;
    if(e.key === 'Backspace' && target.value === '' && index) {
      (target.previousElementSibling || null).focus();
    }
    if(e.key === 'ArrowLeft') {
      const prevElement = target.previousElementSibling || null;
      if(prevElement) prevElement.focus();
    }
    if(e.key === 'ArrowRight') {
      const nextElement = target.nextElementSibling || null;
      if(nextElement) nextElement.focus();
    }
  }

  return (
    <div style={{display: "flex", columnGap: "10px"}}>
      {
        code.map((char, index) => (
          <VerificationCodeInput
            style={{display: "flex", columnGap: "10px"}}
            key={index}
            handleCode={handleCode}
            handleKey={handleKey}
            char={char}
            index={index}
            maxLength={codeLength}
          />
        ))
      }
    </div>
  );
}

export default VerificationCodeInputs;
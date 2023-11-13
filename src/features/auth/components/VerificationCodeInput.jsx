const VerificationCodeInputStyle = {
  width: "25px",
  lineHeight: 1,
  fontSize: "25px",
  padding: "5px",
  textAlign: "center",
  border: "1px solid #ccc",
  ':focus': {
    outline: "none",
    borderColor: "red"
  }
};

const VerificationCodeInput = ({
                                 handleCode,
                                 handleKey,
                                 char,
                                 index,
                                 maxLength
}) => {
  const handleChange = (e) => {
    const pattern = /^\d*$/;
    const target = e.currentTarget;
    const isValidChar = pattern.test(target.value);

    if(!isValidChar) return;

    handleCode(e, target.value, index);
  }
  const handleFocus = (e) => {
    (e.currentTarget).select();
  }

  return (
    <input
      type="text"
      value={char}
      style={VerificationCodeInputStyle}
      onChange={handleChange}
      onKeyDown={(e) => handleKey(e, index)}
      onFocus={handleFocus}
      inputMode="numeric"
      autoComplete="one-time-code"
      maxLength={maxLength}
    />
  )
}

export default VerificationCodeInput;
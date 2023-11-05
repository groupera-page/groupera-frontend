import React from "react";
import VerificationCodeInputs from "./FormFields/VerificationCodeInputs";
import MySelect from "./FormFields/Select";
import MyInput from "./FormFields/Input";

const OnboardingField = ({field}) => {
  switch (field.type) {
    case "multiSelect":
    case "simpleSelect":
    case "dropdown": {
      return <MySelect field={field}/>
    }
    case "number": {
      if (field.name === "auth_code") {
        return <VerificationCodeInputs codeLength={4}/>
      } else{
        return <MyInput {...field}/>
      }
    }
    default:
      return <MyInput {...field}/>
  }
}

export default OnboardingField;

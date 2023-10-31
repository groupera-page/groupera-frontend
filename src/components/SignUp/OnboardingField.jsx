import React from "react";
import VerificationCodeInputs from "./VerificationCodeInputs";

const MyInput = (params) => {
  console.log(params)
  return (
    <div>
      <div className="mt-4 text-sm border border-primaryblue rounded-md">
        {
          params.type === "textarea" ?
            <textarea
              {...params}
              className="w-full border rounded-md p-2 placeholder-primaryText bg-primaryBg"
            >
              {params.value || params.placeholder}
            </textarea>
            :
            <input
              {...params}
              className="w-full border rounded-md p-2 placeholder-primaryText bg-primaryBg"
            />

        }
      </div>
      {
        params.hint &&
        <p className="px-1 mb-2 text-textLightGray">
          {params.hint}
        </p>
      }
      {
        params.error &&
        <p className="px-1 mb-2 text-textLightGray">
          {params.error.map(e => e)}
        </p>
      }
    </div>
  )
}


const MySelect = ({field}) => {
  return (
    <React.Fragment>
      <p>Wähle eine oder mehrere der folgenden Optionen.</p>
      <div className="flex flex-col gap-4 my-2">
        {field.options.map((option) => (
          <label
            key={option.value}
            htmlFor={`radioOption${option.value}`}
            className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
          >
            <div>{option.label}</div>
            <input
              type={field.type === "multiSelect" ? "checkbox" : "radio"}
              id={`radioOption${option.value}`}
              name={field.name}
              value={option.value}
              checked={field.type === "multiSelect" ? field.value.includes(option.value) : field.value === option.value}
              onChange={field.onChange}
              className="mr-1 absolute end-1 md:end-16"
            />
          </label>
        ))}
      </div>
    </React.Fragment>
  )
}


const AuthCode = ({field}) => {

}

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
      }
    }
    //
    // }
    default:
      return <MyInput {...field}/>
  }
}

export default OnboardingField;

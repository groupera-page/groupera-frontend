import React, {useState} from "react";
import useMultistepHook from "../../util/hooks/multistepHook";
import OnboardingField from "./OnboardingField";

const FormWrapper = ({
  steps = [],
  onSubmit = (formFields) => console.log("submitted event", formFields)
                       }) => {
  // localStorage.clear()
  const localStorageData = JSON.parse(localStorage.getItem("signUpData"));

  const [formFields, setFormFields] = useState(steps.map(step => {
    // if there is no data in the local storage we can simply use the initial fields
    if(!localStorageData) return step.fields

    // if there is data in the local storage we switch value and error with the assocField we can find in local storage.
    return step.fields.map(field => {
      const assocField = localStorageData.find(formField => formField.name === field.name)

      return {
        ...field,
        value: assocField.value,
        error: assocField.error,
      }
    })
  }).flat()) // we need to flatten this, so there are no arrays inside array

  const { step, isFirstStep, isLastStep, back, next } =
    useMultistepHook(steps)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isLastStep) {
      localStorage.setItem("signUpData", JSON.stringify(formFields));
      step.onSubmit && step.onSubmit(formFields)
      next()
    }

    onSubmit(formFields)
  }

  const handleChange = (e) => {
    const {name, value, type} = e.target

    setFormFields(formFields.map(field => {
      if (field.name !== name) return field


      // if the field is a multiselect the type will be "checkbox" and the value parameter will be an array instead of a string
      // in that case the clicked option needs to be either added or removed from the array, otherwise the value string will simply be changed
      const newValue = type !== "checkbox" ? value : (field.value.includes(value) ? field.value.filter(v => v !== value) : [...field.value, value])

      return {
        ...field,
        value: newValue,
        error: field.validate ? field.validate.map(v => v(newValue)).filter(v => v !== undefined) : []
      }
    }))
  }

  const clearStorage = (e) => {
    e.preventDefault()
    localStorage.clear()
  }

  if (!step) return <span>Loading…</span>

  return (
    <form>
      <div>
        <h2 className="">{step.header}</h2>
        {
          step.desc &&
          <p className="text-textLightGray">
            {step.desc}
          </p>
        }
        {
          step.fields.length > 0 && step.fields.map((field, idx) => {
            return <OnboardingField key={idx} field={{
              ...formFields.find(formField => formField.name === field.name),
              onChange: handleChange,
            }}/>
          })
        }
      </div>
      {
        !isFirstStep && step.goBackOption &&
        <button onClick={back}>Back</button>
      }
      <button onClick={handleSubmit}>{isLastStep ? "Submit" : "Weiter"}</button>
      <button onClick={clearStorage}>Clear Local Storage</button>
    </form>
  )
}

export default FormWrapper

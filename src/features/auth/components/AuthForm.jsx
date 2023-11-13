import React from "react";
import { Field, reduxForm } from "redux-form";
import VerificationCodeWrapper from "./VerificationCodeWrapper";
import MySelect from "./MySelect";
import myInput from "./MyInput";

const renderField = (field) => {
  switch (field.type) {
    case "inlineMultiSelect":
    case "inlineSelect":
      return <Field
        key={field.name}
        component={MySelect}
        {...field}
      />
    case "authCode":
      return <Field
        key={field.name}
        component={VerificationCodeWrapper}
        {...field}
      />
    default:
      return <Field
        key={field.name}
        component={myInput}
        {...field}
      />
  }
}

const AuthForm = ({ handleSubmit, fields, children }) => {
  return(
    <form onSubmit={handleSubmit}>
      {
        fields.map((field) => renderField(field))
      }
      {children}
    </form>
  )
}

export default reduxForm({
  form: "authForm",
  destroyOnUnmount: false,
})(AuthForm)

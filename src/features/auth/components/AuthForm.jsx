import React from "react";
import { Field, reduxForm } from "redux-form";
import VerificationCodeWrapper from "./VerificationCodeWrapper";
import MySelect from "./MySelect";
import myInput from "./MyInput";
import {connect, useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";

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

let AuthForm = ({ handleSubmit, fields, children }) => {
  return(
    <form onSubmit={handleSubmit}>
      {
        fields.map((field) => renderField(field))
      }
      {children}
    </form>
  )
}

const mapStateToProps = (state, ownProps) => {
  if (ownProps.groupId) {
    return {
      initialValues: {
        alias: 'Fritz',
        email: 'frit.meyer@allesfritz.de',
        password: 'fritz-Meyer1',
        passwordConfirmation: 'fritz-Meyer1',
        gender: 'male',
        joinedGroups: [ownProps.groupId],
        groupSelfModerated: false
      }
    };
  }
  return {
    initialValues: {
      groupSelfModerated: false
    }
  }
};

AuthForm = reduxForm({
  form: "authForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  // enableReinitialize : true
})(AuthForm)

export default connect(mapStateToProps)(AuthForm)
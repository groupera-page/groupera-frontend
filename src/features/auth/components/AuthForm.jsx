import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import moment from "moment";

import VerificationCodeWrapper from "./VerificationCodeWrapper";
import MySelect from "./MySelect";
import myInput from "./MyInput";
import MyImgInput from "../../groups/components/MyImgInput";
import MyDownloadButton from "./MyDownloadButton";
import MyTextarea from "./MyTextarea";
import MySimpleSelect from "./MySimpleSelect";
import MyDatePicker from "./MyDatePicker";

export const renderField = (field) => {
  switch (field.type) {
    case "inlineMultiSelect":
    case "inlineSelect":
      return <Field key={field.name} component={MySelect} {...field} />;
    case "authCode":
      return (
        <Field
          key={field.name}
          component={VerificationCodeWrapper}
          {...field}
        />
      );
    case "textarea":
      return <Field key={field.name} component={MyTextarea} {...field} />;
    case "imgCarousel":
      return <Field key={field.name} component={MyImgInput} {...field} />;
    case "pdfDownload":
      return <Field key={field.name} component={MyDownloadButton} {...field} />;
    // case "date":
    //   return <Field key={field.name} component={MyDatePicker} {...field} />;
    case "checkbox":
      return <Field key={field.name} component={MySimpleSelect} {...field} />;
    default:
      return <Field key={field.name} component={myInput} {...field} />;
  }
};

export const SharedForm = ({ handleSubmit, fields, children }) => (
  <form onSubmit={handleSubmit}>
    {fields.map((field) => renderField(field))}
    {children}
  </form>
);

let AuthForm = (props) => <SharedForm {...props} />;

const mapStateToProps = (state, ownProps) => {
  if (ownProps.groupId) {
    return {
      initialValues: {
        joinedGroups: [ownProps.groupId],
        groupSelfModerated: true,
        meetingStartDate: moment(new Date()).format("YYYY-MM-DD"),
        meetingTime: moment(new Date()).format("hh:mm"),
      },
    };
  }
  return {
    initialValues: {
      groupSelfModerated: true,
      meetingStartDate: moment(new Date()).format("YYYY-MM-DD"),
      meetingTime: moment(new Date()).format("hh:mm"),
    },
  };
};

AuthForm = reduxForm({
  form: "authForm",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  // enableReinitialize : true
})(AuthForm);

export default connect(mapStateToProps)(AuthForm);

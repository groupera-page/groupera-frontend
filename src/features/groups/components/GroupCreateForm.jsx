import {reduxForm} from "redux-form";
import React from "react";
import {SharedForm} from "../../auth/components/AuthForm";

let GroupCreateForm = (props) => <SharedForm {...props}/>

GroupCreateForm = reduxForm({
	form: "createGroupForm",
	destroyOnUnmount: false,
	forceUnregisterOnUnmount: true,
	// enableReinitialize : true
})(GroupCreateForm)

export default GroupCreateForm;

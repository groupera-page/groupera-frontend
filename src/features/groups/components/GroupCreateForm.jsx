import {reduxForm} from "redux-form";
import React from "react";
import {connect} from "react-redux";
import moment from "moment";

import {SharedForm} from "../../auth/components/AuthForm";

let GroupCreateForm = (props) => <SharedForm {...props}/>

const mapStateToProps = () => {
	return {
		initialValues: {
			groupSelfModerated: true,
			meetingStartDate: moment(new Date()).format("YYYY-MM-DD"),
			meetingTime: moment(new Date()).format("hh:mm"),
		},
	};
};


GroupCreateForm = reduxForm({
	form: "createGroupForm",
	// enableReinitialize : true
})(GroupCreateForm)

export default connect(mapStateToProps)(GroupCreateForm);

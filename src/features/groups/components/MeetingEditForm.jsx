import {Field, reduxForm} from "redux-form";
import React from "react";
import {connect} from "react-redux";
import SecondaryButton from "../../../components/Buttons/SecondaryButton";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import {meetingFields} from "../../../util/form.helper";
import MyInput from "../../auth/components/MyInput";
import {useNavigate, useParams} from "react-router-dom";
import MySelect from "../../auth/components/MySelect";
import moment from "moment";

let MeetingEditForm = ({handleSubmit, reset}) => {
	const navigate = useNavigate()
	const {groupId} = useParams()

	return (
		<form onSubmit={handleSubmit} className="flex flex-col w-full mt-4">
			<Field
				{...meetingFields.startDate}
				key={"startDate"}
				component={MyInput}
				name={"startDate"}
			/>
			<Field
				{...meetingFields.recurrenceType}
				key={"recurrenceType"}
				component={MySelect}
				name={"recurrenceType"}
			/>
			<Field
				{...meetingFields.time}
				key={"time"}
				component={MyInput}
				name={"time"}
			/>
			<Field
				{...meetingFields.duration}
				key={"duration"}
				component={MySelect}
				name={"duration"}
			/>

			<div className="flex gap-4 col-span-2 justify-end">
				<SecondaryButton isLarge={true} handleButtonClick={() => reset() && navigate(`/groups/${groupId}`)}>Abbrechen</SecondaryButton>
				<PrimaryButton type={"submit"} isLarge={true}>Speichern</PrimaryButton>
			</div>
		</form>
	)
}

MeetingEditForm = reduxForm({
	form: "editMeetingForm",
	// destroyOnUnmount: false
	// enableReinitialize : true
})(MeetingEditForm)

const mapStateToProps = (state, ownProps) => {
	return {
		initialValues: {
			startDate: moment(ownProps.meeting.startDate).format("YYYY-MM-DD"),
			recurrenceType: ownProps.meeting.recurrence.type,
			time: moment(ownProps.meeting.startDate).format("HH:mm"),
			duration: ownProps.meeting.duration,
		}
	}
};

export default connect(mapStateToProps)(MeetingEditForm);

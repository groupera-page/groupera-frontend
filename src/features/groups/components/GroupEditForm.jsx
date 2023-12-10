import {reduxForm} from "redux-form";
import React from "react";
import {renderField} from "../../auth/components/AuthForm";
import {connect} from "react-redux";
import SecondaryButton from "../../../components/Buttons/SecondaryButton";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import {groupFields} from "../../../util/form.helper";

let GroupEditForm = ({ handleSubmit, reset }) => (
	<form onSubmit={handleSubmit}>
		{
			[{...groupFields.name, name: "name"}, {...groupFields.description, name: "description"}].map((field) => renderField(field))
		}
		<div className="flex gap-4">
			<SecondaryButton isLarge={true} handleButtonClick={reset}>Cancel</SecondaryButton>
			<PrimaryButton type={"submit"} isLarge={true}>Speichern</PrimaryButton>
		</div>
	</form>
)

GroupEditForm = reduxForm({
	form: "editGroupForm",
	// enableReinitialize : true
})(GroupEditForm)

const mapStateToProps = (state, ownProps) => {
	// const group = state.groups?.groups?.find(group => group.id === ownProps.groupId)
	return {
		initialValues: {
			name: ownProps.group.name,
			description: ownProps.group.description,
		}
	}
};

export default connect(mapStateToProps)(GroupEditForm);

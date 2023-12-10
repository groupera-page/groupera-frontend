import {reduxForm} from "redux-form";
import React from "react";
import {renderField} from "../../auth/components/AuthForm";
import {connect} from "react-redux";
import SecondaryButton from "../../../components/Buttons/SecondaryButton";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import {authFields} from "../../../util/form.helper";

let ProfileEditForm = ({ handleSubmit, reset }) => (
	<form onSubmit={handleSubmit}>
		{
			[{
				...authFields.alias,
				hint: "Der Name, mit dem Du in der Gruppe angesprochen werden möchtest."
			}].map((field) => renderField(field))
		}
		<div className="flex gap-4">
			<SecondaryButton isLarge={true} handleButtonClick={reset}>Abbrechen</SecondaryButton>
			<PrimaryButton type={"submit"} isLarge={true}>Speichern</PrimaryButton>
		</div>
	</form>
)

ProfileEditForm = reduxForm({
	form: "editProfileForm",
	// enableReinitialize : true
})(ProfileEditForm)

const mapStateToProps = (state, ownProps) => {
	// const group = state.groups?.groups?.find(group => group.id === ownProps.groupId)
	return {
		initialValues: {
			alias: ownProps.user.alias,
		}
	}
};

export default connect(mapStateToProps)(ProfileEditForm);

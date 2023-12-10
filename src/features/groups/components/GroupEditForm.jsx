import {Field, reduxForm} from "redux-form";
import React from "react";
import {connect} from "react-redux";
import SecondaryButton from "../../../components/Buttons/SecondaryButton";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import {groupFields} from "../../../util/form.helper";
import MyImgInput from "./MyImgInput";
import MyInput from "../../auth/components/MyInput";

let GroupEditForm = ({ handleSubmit, reset }) => (
	<form onSubmit={handleSubmit}>
		<div className={"flex flex-col-reverse lg:flex-col"}>
			<div>
				<Field
					{...groupFields.name}
					key={"name"}
					component={MyInput}
					name={"name"}
				/>
				<Field
					{...groupFields.description}
					key={"description"}
					component={MyInput}
					name={"description"}
				/>
			</div>
			<Field
				{...groupFields.img}
				key={"img"}
				component={MyImgInput}
				name={"img"}
			/>
		</div>

		<div className="flex gap-4 justify-end">
			<SecondaryButton isLarge={true} handleButtonClick={reset}>Abbrechen</SecondaryButton>
			<PrimaryButton type={"submit"} isLarge={true}>Speichern</PrimaryButton>
		</div>
	</form>
)

GroupEditForm = reduxForm({
	form: "editGroupForm",
	// enableReinitialize : true
})(GroupEditForm)

const mapStateToProps = (state, ownProps) => {
	return {
		initialValues: {
			name: ownProps.group.name,
			description: ownProps.group.description,
			img: ownProps.group.img,
		}
	}
};

export default connect(mapStateToProps)(GroupEditForm);

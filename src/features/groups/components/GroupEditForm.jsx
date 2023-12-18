import {Field, reduxForm} from "redux-form";
import React from "react";
import {connect, useSelector} from "react-redux";
import SecondaryButton from "../../../components/Buttons/SecondaryButton";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import {groupFields} from "../../../util/form.helper";
import MyImgInput from "./MyImgInput";
import MyInput from "../../auth/components/MyInput";
import {Link, useNavigate, useParams} from "react-router-dom";
import {BsTrash3} from "react-icons/bs";
import {IoSettingsOutline} from "react-icons/io5";
import LazyLoadImg from "../../../components/LazyLoadImg";
import moment from "moment/moment";
import getFormattedDate from "../../../util/formatMeetingDate";

let GroupEditForm = ({handleSubmit, reset, group}) => {
	const navigate = useNavigate()
	const {groupId} = useParams()
	const formImg = useSelector((state) => state.form.editGroupForm?.values?.img);

	return (
		<form onSubmit={handleSubmit} className="my-2 lg:grid grid-cols-2 gap-12 gap-y-5 lg:mx-0 items-start">
			<div className="flex relative items-center">
				<LazyLoadImg img={formImg || group.img} />
			</div>

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

			<div className={"col-span-2"}>
				{
					group.meetings.map(meeting => {
						return (
							<div className="bg-BG_PRIMARY rounded-md border border-BORDER_PRIMARY p-4 my-4 ">
								<ul className="flex flex-wrap justify-between items-center paragraph-lg">
									<li>
										<ul className="flex flex-wrap gap-4 lg:gap-12 items-center">
											<li className="text-PURPLE_PRIMARY">
												{getFormattedDate(meeting, false)}
											</li>
											<li className="text-PURPLE_PRIMARY">
												{moment(meeting.startDate).format("HH:mm")} Uhr
											</li>

											<li>
												{meeting.duration} Minuten
											</li>
										</ul>
									</li>
									<li>
										<ul className="hidden lg:flex gap-4">
											<li className="cursor-pointer text-TEXT_LIGHTGRAY hover:text-PURPLE_PRIMARY">
												<IoSettingsOutline size={22} onClick={() => navigate(`event/${meeting.id}`)} />
											</li>
											<li className="cursor-pointer text-TEXT_LIGHTGRAY hover:text-PURPLE_PRIMARY">
												<BsTrash3 size={22} />
											</li>
										</ul>
									</li>
								</ul>
							</div>
						)
					})
				}

				<div className="flex justify-end mb-8 gap-8">
				  {/*<ul className="flex gap-8 lg:hidden items-center">*/}
				  {/*  <Link to={`/groups/${groupId}/edit/event`}>*/}
				  {/*    <li className="cursor-pointer text-TEXT_LIGHTGRAY hover:text-PURPLE_PRIMARY">*/}
				  {/*      <IoSettingsOutline size={28} />*/}
				  {/*    </li>*/}
				  {/*  </Link>*/}
				  {/*  <li className="cursor-pointer text-TEXT_LIGHTGRAY hover:text-PURPLE_PRIMARY">*/}
				  {/*    <BsTrash3 size={28} />*/}
				  {/*  </li>*/}
				  {/*</ul>*/}
				  <Link to={`/groups/${groupId}/edit/event`}>
				    <PrimaryButton>Termin hinzufügen</PrimaryButton>
				  </Link>
				</div>
			</div>

			<div className="flex gap-4 col-span-2 justify-end">
				<SecondaryButton isLarge={true} handleButtonClick={() => reset() && navigate(`/groups/${groupId}`)}>Abbrechen</SecondaryButton>
				<PrimaryButton type={"submit"} isLarge={true}>Speichern</PrimaryButton>
			</div>
		</form>
	)
}

GroupEditForm = reduxForm({
	form: "editGroupForm",
	// destroyOnUnmount: false
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

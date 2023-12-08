import React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import useMultistepHook from "../../../util/hooks/multistepHook";
import StepIndicator from "../../auth/components/RegStepper";
import {groupDownloadStep, groupInfoStep, groupSettingsStep, groupThemeStep} from "../../auth/util/funnelSteps";
import {createGroup} from "../groupSlice";
import GroupCreateForm from "./GroupCreateForm";

const steps = [
	groupThemeStep,
	groupInfoStep,
	// groupMeetingStep,
	groupSettingsStep,
	groupDownloadStep
]

const MultiStepGroupCreate = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
		useMultistepHook(steps)

	const handleSubmit = async (values) => {
		if(!isLastStep) return next()
		try {
			const response = await dispatch(createGroup({
				name: values.groupName,
				description: values.groupDescription,
				selfModerated: values.groupSelfModerated,
				topic: values.groupTheme[0],
				// meetings: [] // todo add meeting logic, dependent on backend
			}))
			if (!response) throw Error("something went wrong")
			navigate("/groups")
		} catch (e) {
		// handle the response
		// if an error than don't go to next step but show the error, otherwise proceed to next step.
			console.log("Error", e)
		}
	}

	return (
		<div className={"flex h-screen md:justify-center md:mt-10 lg:mt-28"}>
			<div className={"w-full md:w-3/4 lg:w-1/2 md:h-5/6 px-4 rounded md:shadow-md bg-BG_PRIMARY md:px-4 "}>
				<div>
					<StepIndicator
						currentStepIdx={currentStepIndex}
						totalStepsCounts={steps.length}
					/>
					<h2>{step.header}</h2>
					{
						step.desc &&
						<p className="text-textLightGray">
							{step.desc}
						</p>
					}
					{
						<GroupCreateForm
							fields={step.fields}
							onSubmit={handleSubmit}
						>
							{
								!isFirstStep && step.goBackOption &&
								<button onClick={back}>Back</button>
							}
							<button type="submit">{isLastStep ? "Submit" : "Weiter"}</button>
						</GroupCreateForm>
					}
				</div>
			</div>
		</div>
	)
}

export default MultiStepGroupCreate;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import useMultistepHook from "../../../util/hooks/multistepHook";
import StepIndicator from "../../auth/components/RegStepper";
import {
  groupCreateSuccessStep,
  groupDownloadStep,
  groupInfoStep,
  groupMeetingStep,
  groupSettingsStep,
  groupThemeStep,
} from "../../auth/util/funnelSteps";
import { createGroup } from "../groupSlice";
import GroupCreateForm from "./GroupCreateForm";
import GroupFinishStep from "../../../components/Signup/StepFormComponents/GroupSteps/GroupFinishStep";

const steps = [
  groupThemeStep,
  groupInfoStep,
  groupMeetingStep,
  groupDownloadStep,
  {
    ...groupSettingsStep,
    onSubmit: (values) =>
      createGroup({
        name: values.groupName,
        description: values.groupDescription,
        selfModerated: values.groupSelfModerated,
        topic: values.groupTheme,
        firstMeeting: {
          startDate: new Date(
            `${values.meetingStartDate} ${values.meetingTime}`
          ),
          recurrence: {
            type: values.meetingRecurrenceType,
            days: values.meetingRecurrenceDays,
          },
          duration: values.meetingDuration,
        },
      }),
  },
  groupCreateSuccessStep,
];

const MultiStepGroupCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createdGroupId, setCreatedGroupId] = useState();
  const [isModerator, setIsModerator] = useState();

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepHook(steps);

  const handleLastSubmit = async () => {
    if (!isLastStep) {
      next();
    } else {
      if (isModerator) {
        navigate(`/groups/${createdGroupId}`);
      } else {
        navigate(`/groups`);
      }
    }
  };

  const handleSubmit = async (values) => {
    setIsModerator(values.groupSelfModerated);
    if (step.onSubmit) {
      try {
        const response = await dispatch(step.onSubmit(values));
        if (response.error) throw Error(response.error.message);

        if (response.payload && response.payload.group) {
          setCreatedGroupId(response.payload.group.id);
        }

        await handleLastSubmit();
      } catch (e) {
        console.log("Error", e);
      }
      // handle the response
      // if an error than don't go to next step but show the error, otherwise proceed to next step.
    } else {
      await handleLastSubmit();
    }
  };

  return (
    <div className={"flex md:justify-center "}>
      <div
        className="min-h-[85vh] lg:min-h-[85vh] md:w-3/4 lg:w-1/2
		px-4 rounded md:shadow-md bg-BG_PRIMARY md:px-8 lg:px-28 pt-4 pb-4 md:mt-10 lg:mt-28"
      >
        <div>
          <StepIndicator
            currentStepIdx={currentStepIndex}
            totalStepsCounts={steps.length}
          />
          <div className="mt-8 mb-4">
            <h3>{step.header}</h3>
            {step.desc && <p className="text-textLightGray">{step.desc}</p>}
          </div>
          {step.type !== "success" ? (
            <GroupCreateForm fields={step.fields} onSubmit={handleSubmit}>
              <div className="flex justify-end gap-8 mt-8">
                {!isFirstStep && step.goBackOption && (
                  <PrimaryButton
                    type={"button"}
                    handleButtonClick={back}
                    isInversed={true}
                    isLarge={true}
                  >
                    <div className="flex items-center ">
                      <BsArrowLeft
                        className="w-5 mr-3 text-PURPLE_PRIMARY"
                        size={18}
                      />
                      Zurück
                    </div>
                  </PrimaryButton>
                )}
                <PrimaryButton type={"submit"} isLarge={true}>
                  <div className="flex items-center ">
                    Weiter
                    {/* {isLastStep ? "Submit" : "Weiter"} */}
                    <BsArrowRight
                      className="w-5 ml-3 text-BG_PRIMARY"
                      size={18}
                    />
                  </div>
                </PrimaryButton>
              </div>
            </GroupCreateForm>
          ) : (
            [
              <GroupFinishStep
                key="groupFinishStep"
                groupId={createdGroupId}
                isModerator={isModerator}
              />,
              <div className="flex justify-end gap-8 mt-8" key={"buttons"}>
                <PrimaryButton
                  type={"submit"}
                  isLarge={true}
                  handleButtonClick={handleLastSubmit}
                >
                  <div className="flex items-center ">
                    Weiter
                    <BsArrowRight
                      className="w-5 ml-3 text-BG_PRIMARY"
                      size={18}
                    />
                  </div>
                </PrimaryButton>
              </div>,
            ]
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepGroupCreate;

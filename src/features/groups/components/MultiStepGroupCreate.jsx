import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import useMultistepHook from "../../../util/hooks/multistepHook";
import StepIndicator from "../../auth/components/RegStepper";
import {
  groupDownloadStep,
  groupInfoStep,
  groupSettingsStep,
  groupThemeStep,
} from "../../auth/util/funnelSteps";
import { createGroup } from "../groupSlice";
import GroupCreateForm from "./GroupCreateForm";

const steps = [
  groupThemeStep,
  groupInfoStep,
  // groupMeetingStep,
  groupSettingsStep,
  groupDownloadStep,
];

const MultiStepGroupCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepHook(steps);

  const handleSubmit = async (values) => {
    if (!isLastStep) return next();
    try {
      const response = await dispatch(
        createGroup({
          name: values.groupName,
          description: values.groupDescription,
          selfModerated: values.groupSelfModerated,
          topic: values.groupTheme,
          // meetings: [] // todo add meeting logic, dependent on backend
        })
      );
      if (!response) throw Error("something went wrong");
      navigate("/groups");
    } catch (e) {
      // handle the response
      // if an error than don't go to next step but show the error, otherwise proceed to next step.
      console.log("Error", e);
    }
  };

  return (
    <div className={"flex md:justify-center md:mt-10 lg:mt-28"}>
      <div
        className="min-h-[85vh] lg:min-h-[85vh] md:w-3/4 lg:w-1/2
		px-4 rounded md:shadow-md bg-BG_PRIMARY md:px-8 lg:px-28 pt-4 pb-4"
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
          {
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
                    {isLastStep ? "Submit" : "Weiter"}
                    <BsArrowRight
                      className="w-5 ml-3 text-BG_PRIMARY"
                      size={18}
                    />
                  </div>
                </PrimaryButton>
              </div>
            </GroupCreateForm>
          }
        </div>
      </div>
    </div>
  );
};

export default MultiStepGroupCreate;

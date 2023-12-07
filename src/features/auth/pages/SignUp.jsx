import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createAction } from "@reduxjs/toolkit";
import AuthForm from "../components/AuthForm";
import logoSvg from "../../../assets/imgLogos/logoNoBg.svg";
import useMultistepHook from "../../../util/hooks/multistepHook";
import getFunnelSteps from "../util/getFunnelSteps";
import StepIndicator from "../components/RegStepper";
import { setAuthToken } from "../authSlice";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const populateAuthForm = createAction("populateAuthForm");

const SignUp = () => {
  const [searchParams] = useSearchParams();
  const { steps, joinGroupId } = getFunnelSteps(searchParams);
  const dispatch = useDispatch();
  const navitate = useNavigate();

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepHook(steps);

  const handleLastSubmit = async () => {
    if (!isLastStep) {
      next();
    } else {
      try {
        await dispatch(setAuthToken());
        navitate("/profile");
        // if (response.error) throw Error(response.error.message)
      } catch (e) {
        console.log("Error", e);
      }
    }
  };

  const handleSubmit = async (values) => {
    if (step.onSubmit) {
      try {
        const response = await dispatch(step.onSubmit(values));
        console.log(response);
        if (response.error) throw Error(response.error.message);

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
    <div className="flex w-full h-full md:justify-center  md:mt-[4vh] pb-24 bg-BG_PRIMARY md:bg-BG_GRAY">
      <div
        className="min-h-[90vh] lg:min-h-[90vh] md:w-3/4 lg:w-1/2 
      px-4 rounded md:shadow-md bg-BG_PRIMARY md:px-8 lg:px-28 pt-4 "
      >
        <div className="pb-3 flex justify-center">
          <img src={logoSvg} alt="logo" className="lg:w-40 w-28" />
        </div>
        <div>
          <div>
            <StepIndicator
              currentStepIdx={currentStepIndex}
              totalStepsCounts={steps.length}
            />
            <h3 className="mt-8">{step.header}</h3>
            {step.desc && (
              <p className="paragraph-sm text-TEXT_LIGHTGRAY mt-1">
                {step.desc}
              </p>
            )}
            {
              <AuthForm
                fields={step.fields}
                onSubmit={handleSubmit}
                groupId={joinGroupId}
              >
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
              </AuthForm>
            }
          </div>
          {/*  img */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;

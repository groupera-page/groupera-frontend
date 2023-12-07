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
    <div className="flex w-full h-full md:justify-center mt-5 md:mt-10 lg:mt-12 pb-24 bg-BG_PRIMARY md:bg-BG_GRAY">
      <div
        className="min-h-[85vh] lg:min-h-[85vh] md:w-3/4 lg:w-1/2 
      px-4 rounded md:shadow-md bg-BG_PRIMARY md:px-8 lg:px-28 pt-8 "
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
                {!isFirstStep && step.goBackOption && (
                  <button onClick={back}>Back</button>
                )}
                <button type="submit">
                  {isLastStep ? "Submit" : "Weiter"}
                </button>
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

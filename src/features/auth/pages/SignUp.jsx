import React from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import AuthForm from "../components/AuthForm";

import logoSvg from "../../../assets/imgLogos/logoNoBg.svg";
import useMultistepHook from "../../../util/hooks/multistepHook";
import getFunnelSteps from "../../../util/getFunnelSteps";
import StepIndicator from "../components/RegStepper";
import {setAuthToken} from "../authSlice";
import tokenService from "../../../util/tokenServices";

const SignUp = () => {
  const [searchParams] = useSearchParams()
  const steps = getFunnelSteps(searchParams)
  const dispatch = useDispatch()

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepHook(steps)

  const handleLastSubmit = () => {
    if (!isLastStep) {
      next()
    } else{
      try {
        const token = tokenService.getLocalAuthToken();
        console.log("token", token)
        dispatch(setAuthToken({token: token}))
        // if (response.error) throw Error(response.error.message)
      } catch (e) {
        console.log("Error", e)
      }
    }
  }

  const handleSubmit = async (values) => {
    if(step.onSubmit){
      try {
        const response = await dispatch(step.onSubmit(values))
        console.log(response)
        if (response.error) throw Error(response.error.message)


        handleLastSubmit()
      } catch (e) {
        console.log("Error", e)
      }
      // handle the response
      // if an error than don't go to next step but show the error, otherwise proceed to next step.
    } else {
      handleLastSubmit()
    }
  }

  return (
    <div>
      <div>
        <img src={logoSvg} alt="logo" className="lg:w-40 w-28" />
      </div>
      <div>
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
            <AuthForm
              fields={step.fields}
              onSubmit={handleSubmit}>
              {
                !isFirstStep && step.goBackOption &&
                <button onClick={back}>Back</button>
              }
              <button type="submit">{isLastStep ? "Submit" : "Weiter"}</button>
            </AuthForm>
          }
        </div>
        {/*  img */}
      </div>
    </div>
  )
}

export default SignUp;

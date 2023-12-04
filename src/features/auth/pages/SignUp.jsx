import React from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import AuthForm from "../components/AuthForm";

import logoSvg from "../../../assets/imgLogos/logoNoBg.svg";
import useMultistepHook from "../../../util/hooks/multistepHook";
import getFunnelSteps from "../../../util/getFunnelSteps";

const SignUp = () => {
  const [searchParams] = useSearchParams()
  const steps = getFunnelSteps(searchParams)
  const dispatch = useDispatch()

  const { step, isFirstStep, isLastStep, back, next } =
    useMultistepHook(steps)

  const handleSubmit = async (values) => {
    if (!isLastStep) {
      if(step.onSubmit){
        try {
          const response = await dispatch(step.onSubmit(values))

          // if (response.error) throw Error(response.error.message)
          console.log(response)
          next()
        } catch (e) {
          console.log(e)
        }
        // handle the response
        // if an error than don't go to next step but show the error, otherwise proceed to next step.
      } else{
        next()
      }
    }
    console.log("submit form", values)
  }

  return (
    <div>
      <div>
        <img src={logoSvg} alt="logo" className="lg:w-40 w-28" />
      </div>
      <div>
        <div>
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

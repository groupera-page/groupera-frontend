import React, {useState} from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm";
import logoSvg from "../../../assets/imgLogos/logoNoBg.svg";
import useMultistepHook from "../../../util/hooks/multistepHook";
import getFunnelSteps from "../util/getFunnelSteps";
import StepIndicator from "../components/RegStepper";
import { setAuthToken } from "../authSlice";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const SignUp = () => {
  const [searchParams] = useSearchParams();
  const { type, steps, joinGroupId } = getFunnelSteps(searchParams);
  const [createdGroupId, setCreatedGroupId] = useState()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepHook(steps);

  const handleLastSubmit = async (groupId) => {
    if (!isLastStep) {
      next();
    } else {
      try {
        await dispatch(setAuthToken());
        switch (type) {
          case "chooseFunnelCreate":
          case "createGroupFunnel":
            navigate(`/groups/${groupId || createdGroupId}`);
            break
          case "joinGroupFunnel":
            navigate(`/groups/${joinGroupId}`);
            break
          default:
            navigate("/");
        }
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
        if (response.error) throw Error(response.error.message);

        if (response.payload && response.payload.group) {
          setCreatedGroupId(response.payload.group.id)
        }

        await handleLastSubmit(response.payload?.group?.id);
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
    <div className="flex w-full h-full md:justify-center  md:mt-[4vh] pb-20 bg-BG_PRIMARY md:bg-BG_GRAY">
      <div
        className="min-h-[90vh] lg:min-h-[90vh] md:w-3/4 lg:w-1/2
      px-4 rounded md:shadow-md bg-BG_PRIMARY md:px-8 lg:px-28 pt-4 pb-4"
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

            <div className="mt-8 mb-4">
              <h3>{step.header}</h3>
              {step.desc && (
                <p className="paragraph-sm text-TEXT_LIGHTGRAY ">{step.desc}</p>
              )}
            </div>
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
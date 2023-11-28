import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoSvg from "../../assets/imgLogos/logoNoBg.svg";
import UserVerifyCodeStep from "./StepFormComponents/UserSteps/UserVerifyCodeStep";
import StepIndicator from "./StepFormComponents/StepIndicator";
import useMultiStepForm from "../../util/hooks/useMultiStepForm";
import FunnelSteps from "./StepFormComponents/FunnelSteps";
import { userDataInit, groupDataInit } from "../../util/initData";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import PrimaryButton from "../Buttons/PrimaryButton";
import InputError from "../UserInputs/InputError";
import { createGroup } from "../../api/groupService";
import { verifyCode, createUser, updateUser } from "../../api/userService";
import { validateUserForm, validateGroupForm } from "../../util/formValidation";

export default function FunnelCard({ funnelIndex, showLogo = true }) {
  const [userData, setUserData] = useState(userDataInit);
  const [groupData, setGroupData] = useState(groupDataInit);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isVerified, setisVerified] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();
  localStorage.clear();

  useEffect(() => {
    const isVerified = JSON.parse(localStorage.getItem("isVerified")) || false;
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || "";
    const storedStepIndex = JSON.parse(localStorage.getItem("stepIndex"));
    setisVerified(isVerified);
    setCurrentUser(currentUser);
    goTo(storedStepIndex);
  }, []);

  //Create steps inside funnel
  const funnelSteps = FunnelSteps(
    funnelIndex,
    userData,
    updateFields,
    updateGroupFields,
    groupData,
    resendCode
  );
  //Create Hook to handle multistep form and pass the funnel steps
  const { steps, currentStepIndex, step, back, next, goTo, isLastStep } =
    useMultiStepForm(funnelSteps);

  // Get code verification index from the current funnel
  const verifyCodeIndex = funnelSteps.findIndex(
    (component) => component.type === UserVerifyCodeStep
  );

  useEffect(() => {
    localStorage.setItem("stepIndex", JSON.stringify(currentStepIndex));
  }, [currentStepIndex]);

  function updateFields(fields) {
    setUserData((prev) => {
      const updatedData = { ...prev, ...fields };
      localStorage.setItem("userData", JSON.stringify(updatedData));
      return updatedData;
    });
  }
  function updateGroupFields(fields) {
    setGroupData((prev) => {
      const updatedData = { ...prev, ...fields };
      localStorage.setItem("groupData", JSON.stringify(updatedData));
      return updatedData;
    });
  }
  function resendCode() {
    //Implement when backend is done
    console.log("Resent code -");
  }

  function handleBackButton() {
    back(1);
    setErrorMessage("");
  }

  const handleGroup = async (e) => {
    e.preventDefault();

    if (step && step.type.name === "GroupInfoStep") {
      const isGroupValid = validateGroupForm(groupData, updateGroupFields);
      if (!isGroupValid) {
        return;
      } else {
        console.log("group is valid");
        next(1);
      }
    } else if (step && step.type.name === "GroupSettingStep") {
      console.log("create group");
      const success = await createGroup(groupData, userData, setErrorMessage);
      if (success) {
        if (isLastStep) {
          localStorage.clear();
          navigate("/login");
        } else {
          setErrorMessage("");
          console.log("created group");
          return next(1);
        }
      } else {
        console.log("cant create group");
      }
    }
  };

  const handleUser = async (e) => {
    e.preventDefault();

    //Next step
    if (
      step &&
      step.type.name !== "UserInfoStep" &&
      step.type.name !== "UserVerifyCodeStep" &&
      !isLastStep
    ) {
      console.log("Doing next without post or update");
      setErrorMessage("");
      return next(1);
    }

    if (step && step.type.name === "UserInfoStep") {
      const isUserFormValid = validateUserForm(
        userData,
        updateFields,
        setErrorMessage,
        step
      );
      if (isUserFormValid) {
        await createUser(userData, isVerified, setErrorMessage);
        next(1);
      } else {
        return;
      }
    }

    if (step && step.type.name === "UserVerifyCodeStep") {
      const isUserVerified = await verifyCode(
        userData,
        setCurrentUser,
        setisVerified,
        setErrorMessage
      );
      if (isUserVerified) {
        if (isLastStep) {
          localStorage.clear();
          navigate("/login");
        } else {
          setErrorMessage("");
          return next(1);
        }
      }
      return;
    }

    if (isVerified) {
      await updateUser(userData, currentUser, setErrorMessage);
      if (isLastStep) {
        localStorage.clear();
        navigate("/login");
      } else {
        setErrorMessage("");
        return next(1);
      }
      return;
    }
  };

  return (
    <div
      className="w-full md:w-1/2 lg:h-5/6 
      px-4 rounded md:shadow-md bg-BG_PRIMARY md:px-4 "
    >
      <div className="pb-3 flex justify-center">
        {showLogo && (
          <img src={logoSvg} alt="logo" className="lg:w-40 w-28 p-2 pt-3" />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-center">
          <div className="flex flex-col p-2 text-xs gap-2">
            <StepIndicator
              currentStep={currentStepIndex + 1}
              steps={steps.length}
            />
            <div
              className="hidden lg:block"
              style={{ marginLeft: `${currentStepIndex * 44}px` }}
            >
              {currentStepIndex + 1} von {steps.length}
            </div>
          </div>
        </div>
        <form
          onSubmit={
            step &&
            (step.type.name === "GroupSettingStep" ||
              step.type.name === "GroupInfoStep")
              ? handleGroup
              : handleUser
          }
          className="pb-4"
        >
          {step}
          <div className="flex gap-2 justify-center">
            <div className="flex flex-col w-full items-center">
              <InputError
                showMessage={errorMessage}
                errorMessage={errorMessage}
              />
              <div className="flex gap-4 justify-center ">
                <div className="mt-5">
                  {currentStepIndex !== 0 &&
                    verifyCodeIndex !== currentStepIndex &&
                    verifyCodeIndex + 1 !== currentStepIndex && (
                      <PrimaryButton
                        type={"button"}
                        handleButtonClick={handleBackButton}
                        isInversed={true}
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
                </div>
                <div className="mt-5">
                  <PrimaryButton type={"submit"}>
                    <div className="flex items-center ">
                      {isLastStep ? "Absenden" : "Weiter"}
                      <BsArrowRight
                        className="w-5 ml-3 text-BG_PRIMARY"
                        size={18}
                      />
                    </div>
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

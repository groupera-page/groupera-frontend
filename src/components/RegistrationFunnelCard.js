import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoSvg from "../assets/imgLogos/logoNoBg.svg";
import VerifyCodeStep from "./StepFormComponents/UserSteps/VerifyCodeStep";
import RegStepper from "./StepFormComponents/RegStepper";
import useMultiStepForm from "./StepFormComponents/useMultiStepForm";
import { AiOutlineWarning } from "react-icons/ai";
import FunnelSteps from "./FunnelSteps";
import { userDataInit, groupDataInit } from "./StepFormComponents/initData";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function RegistrationFunnelCard({ funnelIndex }) {
  const [userData, setUserData] = useState(userDataInit);
  const [groupData, setGroupData] = useState(groupDataInit);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isVerified, setisVerified] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();
  localStorage.clear();

  useEffect(() => {
    const isVerified = JSON.parse(localStorage.getItem("isVerified")) || false;
    setisVerified(isVerified);
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || "";
    setCurrentUser(currentUser);
    const storedStepIndex = JSON.parse(localStorage.getItem("stepIndex"));
    goTo(storedStepIndex);
  }, []);

  const funnelSteps = FunnelSteps(
    funnelIndex,
    userData,
    updateFields,
    updateGroupFields,
    groupData,
    resendCode
  );
  //Create Hook to handle multistep form
  const { steps, currentStepIndex, step, back, next, goTo, isLastStep } =
    useMultiStepForm(funnelSteps);

  // Get code verification index from the current funnel
  const verifyCodeIndex = funnelSteps.findIndex(
    (component) => component.type === VerifyCodeStep
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
  console.log(step.type.name);
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
    // Format date string to backend
    const newFormatDay = new Date(groupData.day).toISOString().slice(0, 10);
    const requestGroupBody = {
      name: groupData.name,
      description: groupData.description,
      time: groupData.time.slice(0, 5),
      length: groupData.length,
      img: groupData.img,
      date: newFormatDay,
      frequency: groupData.freq,
    };
    try {
      const url = `http://localhost:5005/group/create/${userData.email}`;
      await axios.post(url, requestGroupBody);
      console.log(groupData);
      return next(1);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setErrorMessage(error.response.data.message);
      }
    }
  };

  const handleUser = async (e) => {
    e.preventDefault();

    //Group error checks
    if (step.type.name === "GroupInfoStep") {
      if (groupData.name.length < 3) {
        updateGroupFields({
          errorGroupName: "Bitte geben Sie Ihren Gruppenname an.",
        });
        return;
      }

      if (groupData.description.length < 3) {
        updateGroupFields({
          errorGroupDescription: "Bitte geben Sie mindestens drei Zeichen ein",
        });
        return;
      }
    }
    if (step.type.name === "UserInfoStep") {
      if (userData.username.length < 3) {
        updateFields({
          errorUserName: "Bitte geben Sie Ihren Username an.",
        });
        return;
      }
      //User error checks
      if (userData.email.length < 1) {
        updateFields({
          errorUserEmail: "Bitte geben Sie eine E-Mail Adresse ein.",
        });

        return;
      }

      if (userData.password.length < 1) {
        updateFields({
          errorUserPass: "Bitte geben Sie Ihr Passwort an.",
        });

        return;
      }

      //******************* */
      if (userData.isMinor === true) {
        setErrorMessage("Du musst älter als 18 Jahre sein.");
        return;
      }

      if (userData.password !== userData.passwordCheck) {
        setErrorMessage("Passwörter stimmen nicht überein");
        return;
      }

      if (userData.isAccepted !== "accepted") {
        setErrorMessage("Bitte akzeptieren Sie die Bedingungen");
        return;
      }
    }

    if (step.type.name === "VerifyCodeStep") {
      const codeStringJoined = userData.code.join("");
      const codeString =
        codeStringJoined === "" ? "-1-1-1-1" : codeStringJoined;
      try {
        const url = `http://localhost:5005/user/verified`;
        const response = await axios.post(url, { code: codeString });
        if (response.status === 200) {
          const userInfo = await axios.get(
            `http://localhost:5005/user/${userData.email}`
          );
          setCurrentUser(userInfo.data._id);
          localStorage.setItem(
            "currentUser",
            JSON.stringify(userInfo.data._id)
          );
          setisVerified(true);
          localStorage.setItem("isVerified", JSON.stringify(true));
          setErrorMessage("");

          if (isLastStep) {
            localStorage.clear();
            navigate("/login");
          }

          return next(1);
        } else {
          setErrorMessage("Falscher Verifizierungscode.");
          return;
        }
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage("Error occurred during verification.");
        return;
      }
    }

    if (step.type.name !== "UserInfoStep" && !isLastStep) {
      setErrorMessage("");
      return next(1);
    }

    const requestBody = {
      username: userData.username,
      email: userData.email,
      password: userData.password,
      moderator: userData.moderator,
      isAccepted: userData.terms,
    };

    try {
      if (!isVerified) {
        console.log("CREATE new user");
        await axios.post(`http://localhost:5005/user/signup`, requestBody);

        setErrorMessage("");

        return next(1);
      } else {
        console.log("Update user");
        await axios.put(
          `http://localhost:5005/user/edit/${currentUser}`,
          requestBody
        );
        if (isLastStep) {
          localStorage.clear();
          navigate("/login");
        } else {
          setErrorMessage("");
          return next(1);
        }
      }
    } catch (error) {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    }
  };

  return (
    <div
      className="lg:sticky w-full h-full  lg:w-1/2 lg:h-5/6 overflow-y-scroll
      px-4 rounded md:shadow-md bg-primaryBg md:p-8 "
    >
      <div className="pb-3">
        <img src={logoSvg} alt="logo" className="lg:w-40 w-28 p-2 pt-3" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-center">
          <div className="flex flex-col p-2 text-xs gap-2">
            <RegStepper
              currentStep={currentStepIndex + 1}
              steps={steps.length}
            />
            <div style={{ marginLeft: `${currentStepIndex * 44}px` }}>
              {currentStepIndex + 1} von {steps.length}
            </div>
          </div>
        </div>
        <form
          onSubmit={
            step.type.name === "GroupSettingStep" ? handleGroup : handleUser
          }
          className="pb-4"
        >
          {step}
          <div className="flex gap-2 justify-center">
            <div className="flex flex-col w-full ">
              <div
                className={`flex transition-all ease-in-out duration-500 justify-center ${
                  errorMessage ? "opacity-100" : "opacity-0"
                }`}
              >
                {errorMessage && (
                  <div
                    className={`flex transition-all ease-in-out duration-500 justify-center `}
                  >
                    <div className="border-2  rounded-md mb-2 px-2">
                      <div className="flex items-center text-primarypurple">
                        <AiOutlineWarning
                          className="text-red text-primarybg"
                          size={32}
                        />
                        <p className="bg-white p-2 text-primarypurple text-sm">
                          {errorMessage}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-4 justify-end">
                {currentStepIndex !== 0 &&
                  verifyCodeIndex !== currentStepIndex &&
                  verifyCodeIndex + 1 !== currentStepIndex && (
                    <button
                      type="button"
                      onClick={handleBackButton}
                      className={` text-primarypurple hover-bg-primarypurple-hover px-4 py-1 ${
                        errorMessage ? "mt-0" : "mt-4"
                      } rounded-lg`}
                    >
                      <div className="flex items-center">
                        <BsArrowLeft
                          className="w-5 mr-3 text-primarypurple"
                          size={32}
                        />
                        Zurück
                      </div>
                    </button>
                  )}
                <button
                  type="submit"
                  // onClick={handleNextButton}
                  className={`text-slate-100 hover:text-white  bg-primarypurple hover-bg-primarypurple-hover px-4 py-1 ${
                    errorMessage ? "mt-0" : "mt-4"
                  } rounded-lg`}
                >
                  <div className="flex items-center">
                    {isLastStep ? "Absenden" : "Weiter"}
                    <BsArrowRight
                      className="w-5 ml-3 text-primarybg"
                      size={32}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

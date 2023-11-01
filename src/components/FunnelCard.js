import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoSvg from "../assets/imgLogos/logoNoBg.svg";
import UserInfoStep from "./StepFormComponents/UserSteps/UserInfoStep";
import VerifyCodeStep from "./StepFormComponents/UserSteps/VerifyCodeStep";
import RegStepper from "./StepFormComponents/RegStepper";
import useMultiStepForm from "./StepFormComponents/useMultiStepForm";
import GroupSettingStep from "./StepFormComponents/GroupSteps/GroupSettingStep";
import GroupInfoStep from "./StepFormComponents/GroupSteps/GroupInfoStep";
import { AiOutlineWarning } from "react-icons/ai";
import FunnelSwitch from "./FunnelSwitch";
import { userDataInit, groupDataInit } from "./StepFormComponents/initData";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Funnel({ FunnelIndex }) {
  const [userData, setUserData] = useState(userDataInit);
  const [groupData, setGroupData] = useState(groupDataInit);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isEditing, setIsEditing] = useState(false);
  const [isVerified, setisVerified] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const navigate = useNavigate();
  const [errorGroupDescription, setErrorGroupDescription] = useState("");
  const [errorGroupName, setErrorGroupName] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorUserEmail, setErrorUserEmail] = useState("");
  const [errorUserPass, setErrorUserPass] = useState("");
  const [errorUserSecondPass, setErrorUserSecondPass] = useState("");

  localStorage.clear();

  useEffect(() => {
    const isVerified = JSON.parse(localStorage.getItem("isVerified")) || false;
    setisVerified(isVerified);
    const isEditing = JSON.parse(localStorage.getItem("isEditing")) || false;
    setIsEditing(isEditing);
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || "";
    setCurrentUser(currentUser);
    const currentUserEmail =
      JSON.parse(localStorage.getItem("currentUserEmail")) || "";
    setCurrentUserEmail(currentUserEmail);
    const storedStepIndex = JSON.parse(localStorage.getItem("stepIndex"));
    goTo(storedStepIndex);
  }, []);

  const funnelSteps = FunnelSwitch(
    FunnelIndex,
    userData,
    updateFields,
    updateGroupFields,
    isVerified,
    groupData,
    resendCode,
    errorGroupDescription,
    errorGroupName,
    errorUserName,
    errorUserEmail,
    errorUserPass,
    errorUserSecondPass
  );

  const { steps, currentStepIndex, step, back, next, goTo, isLastStep } =
    useMultiStepForm(funnelSteps);

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

  // Get indexes from the current funnel
  const UserInfoStepIndex = funnelSteps.findIndex(
    (component) => component.type === UserInfoStep
  );
  const verifyCodeIndex = funnelSteps.findIndex(
    (component) => component.type === VerifyCodeStep
  );
  const GroupSettingIndex = funnelSteps.findIndex(
    (component) => component.type === GroupSettingStep
  );

  const GroupInfoIndex = funnelSteps.findIndex(
    (component) => component.type === GroupInfoStep
  );
  const stepAfterVerify = verifyCodeIndex + 1;

  function handleBackButton() {
    setIsEditing(true);
    localStorage.setItem("isEditing", JSON.stringify(true));
    back(1);
    setErrorMessage("");
    setErrorGroupDescription(null);
    setErrorGroupName(null);
    setErrorUserEmail(null);
    setErrorUserPass(null);
    setErrorUserSecondPass(null);
    setErrorUserName(null);
  }

  const handleGroup = async (e) => {
    e.preventDefault();
    console.log("CLICKED - CREATING GROUP");

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
      // when: groupData.when,
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

    if (currentStepIndex === GroupInfoIndex) {
      // if (groupData.preventNext === true) {
      //   return;
      // }

      if (groupData.name.length < 3) {
        setErrorGroupName("Bitte geben Sie Ihren Gruppenname an.");

        return;
      }

      if (groupData.description.length < 3) {
        setErrorGroupDescription("Bitte geben Sie mindestens drei Zeichen ein");
        return;
      }
    }

    if (currentStepIndex === UserInfoStepIndex) {
      if (userData.username.length < 3) {
        setErrorUserName("Bitte geben Sie Ihren Username an");
        return;
      }

      if (userData.email.length < 1) {
        setErrorUserEmail("Bitte geben Sie eine E-Mail Adresse ein");
        return;
      }

      if (userData.password.length < 1) {
        setErrorUserPass("Bitte geben Sie Ihr Passwort an.");
        return;
      }

      if (userData.password.length < 1) {
        setErrorUserPass("Bitte geben Sie Ihr Passwort an.");
        return;
      }

      if (userData.isMinor === true) {
        setErrorMessage("Du musst älter als 18 Jahre sein.");
        return;
      }

      if (userData.password !== userData.checkPassword) {
        setErrorMessage("Du musst älter als 18 Jahre sein.");
        return;
      }

      if (userData.isAccepted !== "accepted") {
        setErrorMessage("Bitte akzeptieren Sie die Bedingungen");
        return;
      }
    }

    if (currentStepIndex === verifyCodeIndex) {
      const codeString = userData.code.join("");
      try {
        console.log("My code -", codeString);
        const url = `http://localhost:5005/user/verified`;
        const response = await axios.post(url, { code: codeString });

        if (response.status === 200) {
          // const userInfo = response.data;
          const userInfo = await axios.get(
            `http://localhost:5005/user/${userData.email}`
          );
          console.log("User found", userInfo.data._id);
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
        // Handle error if the request fails
        console.log("ERROR EMAIL");
        console.error("Error:", error);
        setErrorMessage("Error occurred during verification.");
        return;
      }
    }

    if (currentStepIndex !== UserInfoStepIndex && !isLastStep) {
      setIsEditing(false);
      localStorage.setItem("isEditing", JSON.stringify(false));
      setErrorMessage("");
      return next(1);
    }

    const requestBody = {
      username: userData.username,
      email: userData.email,
      password: userData.password,
      // gender: userData.gender,
      moderator: userData.moderator,
      isAccepted: userData.terms,
      // experience: userData.experience,
    };

    try {
      if (!isEditing) {
        if (!isVerified) {
          console.log("CREATE new user");
          await axios.post(`http://localhost:5005/user/signup`, requestBody);
          // setisIsEditing(false);
          setErrorMessage("");
          setCurrentUserEmail(userData.email);
          localStorage.setItem(
            "currentUserEmail",
            JSON.stringify(userData.email)
          );

          return next(1);
        } else {
          console.log("Updating");

          await axios.put(
            `http://localhost:5005/user/edit/${currentUser}`,
            requestBody
          );
          // setisIsEditing(false);
          if (isLastStep) {
            localStorage.clear();

            navigate("/login");
          } else {
            setErrorMessage("");
            return next(1);
          }
        }
      } else {
        if (currentUserEmail === userData.email) {
          console.log("Editing current user");
          const userInfo = await axios.get(
            `http://localhost:5005/user/notverified/${userData.email}`
          );
          const response = await axios.put(
            `http://localhost:5005/user/edit/${userInfo.data._id}`,
            requestBody
          );
          setIsEditing(false);
          localStorage.setItem("isEditing", JSON.stringify(false));
          setErrorMessage("");
          return next(1);
        } else {
          console.log("Editing/ Creating new user");
          await axios.post(`http://localhost:5005/user/signup`, requestBody);
          setIsEditing(false);
          localStorage.setItem("isEditing", JSON.stringify(false));
          setErrorMessage("");
          setCurrentUserEmail(userData.email);
          return next(1);
        }
      }
    } catch (error) {
      console.log("ERROR EMAIL?");
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
      // setErrorUser(errorDescription);
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
            currentStepIndex === GroupSettingIndex ? handleGroup : handleUser
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
                  stepAfterVerify !== currentStepIndex && (
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

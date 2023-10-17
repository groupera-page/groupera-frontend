import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import logoSvg from "../assets/imgLogos/logoNoBg.svg";
import UserForm from "./FormComponents/UserForm";
import ExperienceForm from "./FormComponents/ExpForm";
import VerifyCodeForm from "./FormComponents/VerifyCodeForm";
import RegStepper from "./FormComponents/RegStepper";
import useMultiStepForm from "./FormComponents/useMultiStepForm";

const initData = {
  username: "",
  email: "",
  password: "",
  passwordCheck: "",
  code: "",
  gender: "",
  isAccepted: "",
};
export default function Signup() {
  const [data, setData] = useState(initData);
  const { steps, currentStepIndex, step, back, next, isLastStep } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <VerifyCodeForm {...data} updateFields={updateFields} />,
      <ExperienceForm {...data} updateFields={updateFields} />,
    ]);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function handleBackButton() {
    //If index is signup - delete the user from DB
    back();
    setErrorMessage("");
  }

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (data.isAccepted === "") {
      setErrorMessage("Check the box");
      return;
    }

    //Move to update later
    if (currentStepIndex === 1) {
      if (data.code !== "") {
        setErrorMessage("Wrong verification code");
        console.log(data.code);
        return;
      }
    }
    console.log("CURRENT INDEX: ", currentStepIndex);
    // Change to no form interaction
    // if (!isLastStep) {
    //   if (!isValidEmail(data.email)) {
    //     setErrorMessage("Invalid email address");
    //     return;
    //   }
    //   if (data.password !== data.passwordCheck) {
    //     setErrorMessage("Passwörter stimmen nicht überein");
    //     return;
    //   }
    //   return next();
    // }
    // function isValidEmail(email) {
    //   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    //   return emailRegex.test(email);
    // }
    // const requestBody = { username, email, password, goals, experience };
    const requestBody = {
      username: data.username,
      email: data.email,
      password: data.password,
      gender: data.gender,
      isAccepted: data.terms,
    };

    axios
      .post(`http://localhost:5005/user/signup`, requestBody)
      .then((response) => {
        return next();
        // navigate("/");
      })
      .catch((error) => {
        // Delete this catch?
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div
      className="h-full w-full md:h-4/5 md:w-1/2 
      px-4 rounded  bg-primaryBg/90 "
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
            {currentStepIndex + 1} von {steps.length}
          </div>
        </div>
        <form onSubmit={handleSignupSubmit} className=" pb-4 ">
          {step}
          <div className="flex gap-2 justify-center">
            {currentStepIndex !== 0 && (
              <button
                type="button"
                onClick={handleBackButton}
                className={`text-slate-100 hover:text-white bg-primarypurple hover:bg-primarypurple-hover px-4 py-2 rounded-lg`}
              >
                Zurück
              </button>
            )}
            <button
              type="submit"
              className={`text-slate-100 hover:text-white bg-primarypurple hover:bg-primarypurple-hover px-6 mx-2 py-2 rounded-lg`}
            >
              {isLastStep ? "Absenden" : "Weiter"}
            </button>
          </div>
        </form>
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
      </div>
    </div>
  );
}

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
  experience: "",
};
export default function Signup() {
  const [data, setData] = useState(initData);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();
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
    if (currentStepIndex === 2) {
      back(2);
    } else {
      back(1);
    }
    setErrorMessage("");
  }

  function handleNextButton() {
    setErrorMessage("");
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (data.isAccepted === "") {
      setErrorMessage("Bitte akzeptieren Sie die Bedingungen");
      return;
    }

    //Move to update later
    if (currentStepIndex === 1) {
      const codeString = data.code.join();
      if (codeString !== "1,1,1,1") {
        setErrorMessage("Wrong verification code");
        return;
      }
      return next();
    }

    const requestBody = {
      username: data.username,
      email: data.email,
      password: data.password,
      gender: data.gender,
      isAccepted: data.terms,
      // experience: data.experience,
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
      className="h-full w-full md:h-fit md:w-1/2 
      px-4 rounded  bg-primaryBg/90 md:p-8"
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
        <form onSubmit={handleSignupSubmit} className="pb-4">
          {step}
          <div className="flex gap-2 justify-center">
            <div className="flex flex-col w-full ">
              <div
                className={`flex transition-all ease-in-out duration-500 px-2 rounded justify-center ${
                  errorMessage ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="border-2 border-primaryblue rounded-md my-2  w-full">
                  <p className="text-red-500 text-center p-2">{errorMessage}</p>
                </div>
              </div>
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
                  onClick={handleNextButton}
                  className={`text-slate-100 hover:text-white bg-primarypurple hover-bg-primarypurple-hover px-4 py-2 rounded-lg`}
                >
                  {isLastStep ? "Absenden" : "Weiter"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

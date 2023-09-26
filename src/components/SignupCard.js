import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import logoSvg from "../assets/imgLogos/logoNoBg.svg";
import UserForm from "./FormComponents/UserForm";
import ExperienceForm from "./FormComponents/ExpForm";
import RegStepper from "./FormComponents/RegStepper";
import useMultiStepForm from "./FormComponents/useMultiStepForm";

const initData = {
  username: "",
  email: "",
  password: "",
  experience: "",
};
export default function Signup() {
  const [data, setData] = useState(initData);
  const { steps, currentStepIndex, step, back, next, isLastStep } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <ExperienceForm {...data} updateFields={updateFields} />,
    ]);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!isLastStep) {
      if (!isValidEmail(data.email)) {
        setErrorMessage("Invalid email address");
        return;
      }
      return next();
    }
    function isValidEmail(email) {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
    }
    // const requestBody = { username, email, password, goals, experience };
    const requestBody = {
      username: data.username,
      email: data.email,
      password: data.password,
      experience: data.experience,
    };

    axios
      .post(`http://localhost:5005/user/signup`, requestBody)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="w-1/2 h-4/5 justify-center rounded p-12 bg-primaryBg/90 ">
      <div className="lg:flex ">
        <div className="flex flex-col  mt-2 gap-5">
          <img src={logoSvg} alt="logo" className="w-60 mb-4" />
          <RegStepper currentStep={currentStepIndex + 1} steps={steps.length} />
          {currentStepIndex + 1} von {steps.length}
          <form onSubmit={handleSignupSubmit} className="">
            {step}
            <div className="flex gap-4">
              {currentStepIndex !== 0 && (
                <button
                  type="button"
                  onClick={back}
                  className={`text-slate-100 hover:text-white bg-primarypurple hover:bg-primarypurple-hover px-4 py-2 rounded-lg`}
                >
                  Zurück
                </button>
              )}
              <button
                type="submit"
                className={`text-slate-100 hover:text-white bg-primarypurple hover:bg-primarypurple-hover px-4 py-2 rounded-lg`}
              >
                {isLastStep ? "Absenden" : "Weiter"}
              </button>
            </div>
            {/*  */}

            <div className="flex items-center">
              {/* <p className="my-8 mr-4">
                Ich habe bereits ein Account.{" "}
                <Link to={"/login"} className="text-primarypurple">
                  Hier anmelden
                </Link>
              </p> */}

              {/* <button
                type="submit"
                className={` ml-12 flex items-center justify-center bg-primarypurple text-slate-100 hover:text-white p-2 px-5 rounded-md whitespace-nowrap transition-color duration-300 ease-in-out lg:text-base text-1xl`}
              >
                Weiter
              </button> */}
            </div>
          </form>
          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

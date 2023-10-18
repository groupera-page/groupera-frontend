import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  experience: "no experience",
};
export default function Signup() {
  const [data, setData] = useState(initData);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isVerified, setisVerified] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  //const randomCode = Math.floor(1000 + Math.random() * 9000).toString();
  const [randomCode, setRandomCode] = useState(
    Math.floor(1000 + Math.random() * 9000).toString()
  );

  const navigate = useNavigate();
  const { steps, currentStepIndex, step, back, next, isLastStep } =
    useMultiStepForm([
      <UserForm
        {...data}
        updateFields={updateFields}
        isVerified={isVerified}
      />,
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

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    //setRandomCode(Math.floor(1000 + Math.random() * 9000).toString());
    if (data.isAccepted === "") {
      setErrorMessage("Bitte akzeptieren Sie die Bedingungen");
      return;
    }
    console.log("Random code", randomCode);

    if (currentStepIndex === 1) {
      const codeString = data.code.join("");
      console.log("My code", codeString);
      if (codeString === randomCode) {
        const userInfo = await axios.get(
          `http://localhost:5005/user/verified/${codeString}`
        );
        setCurrentUser(userInfo.data._id);
        setisVerified(true);
        return next(1);
      } else {
        setErrorMessage("Wrong verification code");
        return;
      }
      // if (codeString !== "1,1,1,1") {
      //   setErrorMessage("Wrong verification code");
      //   return;
      // }
    }

    const requestBody = {
      username: data.username,
      email: data.email,
      password: data.password,
      gender: data.gender,
      isAccepted: data.terms,
      experience: data.experience,
      code: randomCode,
    };
    console.log("VERIFIED? - ", isVerified);
    //If update step
    if (isVerified) {
      axios
        .put(`http://localhost:5005/user/${currentUser}`, requestBody)
        .then((response) => {
          return next(2);
          // navigate("/");
        })
        .catch((error) => {
          // Delete this catch?
          const errorDescription = error.response.data.message;
          setErrorMessage(errorDescription);
        });
    } else {
      //If post step
      axios
        .post(`http://localhost:5005/user/signup`, requestBody)
        .then((response) => {
          return next(1);
          // navigate("/");
        })
        .catch((error) => {
          // Delete this catch?
          const errorDescription = error.response.data.message;
          setErrorMessage(errorDescription);
        });
    }
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

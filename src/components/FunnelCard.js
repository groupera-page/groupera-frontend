import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoSvg from "../assets/imgLogos/logoNoBg.svg";
import UserForm from "./FormComponents/UserForm";
import ExperienceForm from "./FormComponents/ExpForm";
import VerifyCodeForm from "./FormComponents/VerifyCodeForm";
import RegStepper from "./FormComponents/RegStepper";
import useMultiStepForm from "./FormComponents/useMultiStepForm";
import ThemesForm from "./FormComponents/ThemesForm";
import GroupInfoForm from "./FormComponents/GroupInfoForm";

const initData = {
  username: "",
  email: "",
  password: "",
  passwordCheck: "",
  code: [],
  gender: "",
  isAccepted: "",
  experience: "no experience",
};

const initGroupData = {
  name: "",
  description: "",
  users: "",
  img: "",
  time: "",
  freq: "",
  when: "",
  day: "",
  length: "",
  token: "",
};

export default function Funnel({ FunnelIndex }) {
  const [data, setData] = useState(initData);
  const [groupData, setGroupData] = useState(initGroupData);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isEditing, setisIsEditing] = useState(false);
  const [isVerified, setisVerified] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  const navigate = useNavigate();
  //const randomCode = Math.floor(1000 + Math.random() * 9000).toString();
  const [randomCode, setRandomCode] = useState(
    Math.floor(1000 + Math.random() * 9000).toString()
  );
  let funnelSteps = [];
  let userFormIndex;
  let verifyCodeIndex;
  let elementAfterVerify;
  let groupInfoindex;
  switch (FunnelIndex) {
    case 1:
      funnelSteps = [
        <UserForm
          {...data}
          updateFields={updateFields}
          isVerified={isVerified}
        />,
        <VerifyCodeForm {...data} updateFields={updateFields} />,
        <ExperienceForm {...data} updateFields={updateFields} />,
      ];
      //Delete ?
      elementAfterVerify = 2;
      userFormIndex = 0;
      verifyCodeIndex = 1;
      break;
    case 2:
      funnelSteps = [
        <ThemesForm {...data} updateFields={updateFields} />,
        <ExperienceForm {...data} updateFields={updateFields} />,
        <UserForm
          {...data}
          updateFields={updateFields}
          isVerified={isVerified}
        />,
        <VerifyCodeForm {...data} updateFields={updateFields} />,
      ];
      elementAfterVerify = 99;
      userFormIndex = 2;
      verifyCodeIndex = 3;
      break;
    case 3:
      funnelSteps = [
        <ExperienceForm {...data} updateFields={updateFields} />,
        <ThemesForm {...data} updateFields={updateFields} />,
        <GroupInfoForm
          {...data}
          updateFields={updateFields}
          updateGroupFields={updateGroupFields}
        />,

        <UserForm
          {...data}
          updateFields={updateFields}
          isVerified={isVerified}
        />,
        <VerifyCodeForm {...data} updateFields={updateFields} />,
      ];
      elementAfterVerify = false;
      userFormIndex = 2;
      verifyCodeIndex = 3;
      groupInfoindex = 2;
      break;
    case 4:
      break;
    default:
      console.log("No funnel");
  }
  const { steps, currentStepIndex, step, back, next, isLastStep } =
    useMultiStepForm(funnelSteps);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  function updateGroupFields(fields) {
    setGroupData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function handleBackButton() {
    setRandomCode(Math.floor(1000 + Math.random() * 9000).toString());
    console.log("Randomcode", randomCode);
    setisIsEditing(true);
    if (!userFormIndex) {
    }
    if (elementAfterVerify === currentStepIndex) {
      back(2);
    } else {
      back(1);
    }
    setErrorMessage("");
  }

  // Depending on INDEX change the button on click call
  const handleGroup = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:5005/group/create`;
      const { groupData: res } = await axios.post(url, groupData);
      console.log(groupData);
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

  console.log("Randomcode", randomCode);
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (currentStepIndex === userFormIndex) {
      if (data.isAccepted === "") {
        setErrorMessage("Bitte akzeptieren Sie die Bedingungen");
        return;
      }
    }
    // CODE check
    if (currentStepIndex === verifyCodeIndex) {
      const codeString = data.code.join("");
      if (codeString === randomCode) {
        const userInfo = await axios.get(
          `http://localhost:5005/user/verified/${codeString}`
        );
        setCurrentUser(userInfo.data._id);
        setisVerified(true);
        setErrorMessage("");
        if (isLastStep) {
          navigate("/login");
        }
        return next(1);
      } else {
        setErrorMessage("Falscher Verifizierungscode.");
        return;
      }
    }

    //PREVENT db request
    if (currentStepIndex !== userFormIndex && !isLastStep) {
      setisIsEditing(false);
      next(1);
      return;
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

    //POST
    if (!isVerified && !isEditing) {
      console.log("CREATE new user");
      axios
        .post(`http://localhost:5005/user/signup`, requestBody)
        .then((response) => {
          setisIsEditing(false);
          setErrorMessage("");
          setCurrentUserEmail(data.email);
          return next(1);
        })
        .catch((error) => {
          const errorDescription = error.response.data.message;
          setErrorMessage(errorDescription);
        });
    }

    //UPDATE after verification step, handle final multistep
    if (isVerified && !isEditing) {
      console.log("Updating");
      axios
        .put(`http://localhost:5005/user/edit/${currentUser}`, requestBody)
        .then((response) => {
          setisIsEditing(false);
          if (isLastStep) {
            navigate("/login");
          } else {
            return next(1);
          }
        })
        .catch((error) => {
          const errorDescription = error.response.data.message;
          setErrorMessage(errorDescription);
        });
    }
    //Update user if using the same email, otherwise create new user
    if (isEditing) {
      console.log("current email", currentUserEmail);
      console.log("data email", data.email);
      if (currentUserEmail === data.email) {
        console.log("Editing current user");
        const userInfo = await axios.get(
          `http://localhost:5005/user/notverified/${data.email}`
        );
        axios
          .put(
            `http://localhost:5005/user/edit/${userInfo.data._id}`,
            requestBody
          )
          .then((response) => {
            setisIsEditing(false);
            if (currentStepIndex === userFormIndex && isVerified) {
              return next(2);
            }
            // Send new email code
            return next(1);
          })
          .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
          });
      } else {
        console.log("Editing/ Creating new user");
        axios
          .post(`http://localhost:5005/user/signup`, requestBody)
          .then((response) => {
            setisIsEditing(false);
            setErrorMessage("");
            setCurrentUserEmail(data.email);

            return next(1);
            // navigate("/");
          })
          .catch((error) => {
            // Delete this catch?
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
          });
      }
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
        <form
          onSubmit={
            groupInfoindex === currentStepIndex
              ? handleGroup
              : handleSignupSubmit
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
                    <div className="border-2 border-primaryblue rounded-md mb-2 ">
                      <p className="text-red-500 text-center p-2">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-4 justify-center">
                {currentStepIndex !== 0 && (
                  <button
                    type="button"
                    onClick={handleBackButton}
                    className={`text-slate-100 hover:text-white bg-primarypurple hover-bg-primarypurple-hover px-4 py-2 ${
                      errorMessage ? "mt-0" : "mt-4"
                    } rounded-lg`}
                  >
                    Zurück
                  </button>
                )}

                <button
                  type="submit"
                  // onClick={handleNextButton}
                  className={`text-slate-100 hover:text-white bg-primarypurple hover-bg-primarypurple-hover px-4 py-2 ${
                    errorMessage ? "mt-0" : "mt-4"
                  } rounded-lg`}
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

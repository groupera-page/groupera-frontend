import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoSvg from "../assets/imgLogos/logoNoBg.svg";
import UserInfoStep from "./StepFormComponents/UserSteps/UserInfoStep";
import VerifyCodeStep from "./StepFormComponents/UserSteps/VerifyCodeStep";
import RegStepper from "./StepFormComponents/RegStepper";
import useMultiStepForm from "./StepFormComponents/useMultiStepForm";
import GroupInfoStep from "./StepFormComponents/GroupSteps/GroupInfoStep";
import GroupSettingStep from "./StepFormComponents/GroupSteps/GroupSettingStep";
import FunnelSwitch from "./FunnelSwitch";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const initUserData = {
  username: "",
  email: "",
  password: "",
  passwordCheck: "",
  code: [],
  gender: "Weiblich",
  isAccepted: "",
  experience: "no experience",
};

const initGroupData = {
  theme: "Andere*",
  name: "",
  description: "",
  users: [],
  img: "",
  time: "12:0013:00",
  freq: "Einmalig",
  when: "",
  day: "",
  length: "",
  token: "",
  moderator: "Ja",
};

export default function Funnel({ FunnelIndex }) {
  const [userData, setUserData] = useState(initUserData);
  const [groupData, setGroupData] = useState(initGroupData);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [isEditing, setisIsEditing] = useState(false);
  const [isVerified, setisVerified] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const navigate = useNavigate();
  const [randomCode, setRandomCode] = useState(
    Math.floor(1000 + Math.random() * 9000).toString()
  );
  const funnelSteps = FunnelSwitch(
    FunnelIndex,
    userData,
    updateFields,
    updateGroupFields,
    isVerified,
    groupData
  );
  const UserInfoStepIndex = funnelSteps.findIndex(
    (component) => component.type === UserInfoStep
  );
  const verifyCodeIndex = funnelSteps.findIndex(
    (component) => component.type === VerifyCodeStep
  );

  const GroupSettingIndex = funnelSteps.findIndex(
    (component) => component.type === GroupSettingStep
  );
  const stepAfterVerify = verifyCodeIndex + 1;

  const { steps, currentStepIndex, step, back, next, isLastStep } =
    useMultiStepForm(funnelSteps);

  function updateFields(fields) {
    setUserData((prev) => {
      return { ...prev, ...fields };
    });
  }
  function updateGroupFields(fields) {
    setGroupData((prev) => {
      return { ...prev, ...fields };
    });
  }

  function handleBackButton() {
    console.log("Current step index", currentStepIndex);
    console.log("step after index index", stepAfterVerify);
    setRandomCode(Math.floor(1000 + Math.random() * 9000).toString());
    console.log("Randomcode", randomCode);
    setisIsEditing(true);
    if (stepAfterVerify === currentStepIndex) {
      back(2);
    } else {
      back(1);
    }
    setErrorMessage("");
  }

  const handleGroup = async (e) => {
    e.preventDefault();
    console.log("CLICKED - CREATING GROUP");
    // Calculate length
    const startTime = groupData.time.slice(0, 5);
    const endTime = groupData.time.slice(6);
    const [startHours, startMinutes] = startTime.split(":").map(Number);
    const [endHours, endMinutes] = endTime.split(":").map(Number);
    const totalStartMinutes = startHours * 60 + startMinutes;
    const totalEndMinutes = endHours * 60 + endMinutes;
    const differenceMinutes = totalEndMinutes - totalStartMinutes;
    const hours = Math.floor(differenceMinutes / 60);
    const minutes = differenceMinutes % 60;
    const timeDifference = `${hours}:${minutes.toString().padStart(2, "0")}`;
    // Format date string
    const dateString = groupData.day;
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const newFormatDay = `${year}-${month}-${day}`;

    const requestGroupBody = {
      name: groupData.name,
      description: groupData.description,
      time: groupData.time.slice(0, 5),
      length: timeDifference,
      img: groupData.img,
      date: newFormatDay,
      frenquency: groupData.freq,
      when: groupData.when,
    };

    await axios
      .post(`http://localhost:5005/group/create`, requestGroupBody)
      .then((response) => {
        console.log("CREATING GROUP!");
        return next(1);
      })
      .catch((error) => {
        console.log("ERROR");
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
        return;
      });
  };

  console.log("Randomcode", randomCode);
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    if (currentStepIndex === UserInfoStepIndex) {
      if (userData.isAccepted === "") {
        setErrorMessage("Bitte akzeptieren Sie die Bedingungen");
        return;
      }
    }
    // CODE check
    if (currentStepIndex === verifyCodeIndex) {
      console.log("CODE CHECK");
      const codeString = userData.code.join("");
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
    if (currentStepIndex !== UserInfoStepIndex && !isLastStep) {
      setisIsEditing(false);
      setErrorMessage("");
      next(1);
      return;
    }

    const requestBody = {
      username: userData.username,
      email: userData.email,
      password: userData.password,
      gender: userData.gender,
      isAccepted: userData.terms,
      experience: userData.experience,
      code: randomCode,
    };

    //POST TODO - render signing up waiting card. Post is a bit slow
    if (!isVerified && !isEditing) {
      console.log("CREATE new user");
      await axios
        .post(`http://localhost:5005/user/signup`, requestBody)
        .then((response) => {
          setisIsEditing(false);
          setErrorMessage("");
          setCurrentUserEmail(userData.email);
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
            setErrorMessage("");
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
      console.log("data email", userData.email);
      if (currentUserEmail === userData.email) {
        console.log("Editing current user");
        const userInfo = await axios.get(
          `http://localhost:5005/user/notverified/${userData.email}`
        );
        axios
          .put(
            `http://localhost:5005/user/edit/${userInfo.data._id}`,
            requestBody
          )
          .then((response) => {
            setisIsEditing(false);
            setErrorMessage("");
            if (currentStepIndex === UserInfoStepIndex && isVerified) {
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
        await axios
          .post(`http://localhost:5005/user/signup`, requestBody)
          .then((response) => {
            setisIsEditing(false);
            setErrorMessage("");
            setCurrentUserEmail(userData.email);

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
      px-4 rounded bg-primaryBg md:p-8"
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
            currentStepIndex === GroupSettingIndex
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

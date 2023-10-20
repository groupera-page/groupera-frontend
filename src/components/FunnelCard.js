import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoSvg from "../assets/imgLogos/logoNoBg.svg";
import UserForm from "./FormComponents/UserForm";
import ExperienceForm from "./FormComponents/ExpForm";
import VerifyCodeForm from "./FormComponents/VerifyCodeForm";
import RegStepper from "./FormComponents/RegStepper";
import useMultiStepForm from "./FormComponents/useMultiStepForm";
import GroupThemesForm from "./FormComponents/GroupThemesForm";
import GroupInfoForm from "./FormComponents/GroupInfoForm";
import FunnelSwitch from "./FunnelSwitch";

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
  theme: "",
  name: "",
  description: "",
  users: "",
  img: "",
  time: "12:00:13:00",
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
  const [randomCode, setRandomCode] = useState(
    Math.floor(1000 + Math.random() * 9000).toString()
  );
  const funnelSteps = FunnelSwitch(
    FunnelIndex,
    data,
    updateFields,
    updateGroupFields,
    isVerified,
    groupData
  );
  const userFormIndex = funnelSteps.findIndex(
    (component) => component.type === UserForm
  );
  const verifyCodeIndex = funnelSteps.findIndex(
    (component) => component.type === VerifyCodeForm
  );
  const groupInfoindex = funnelSteps.findIndex(
    (component) => component.type === GroupInfoForm
  );
  const stepAfterVerify = verifyCodeIndex + 1;

  console.log(userFormIndex);

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
    if (stepAfterVerify === currentStepIndex) {
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
          onSubmit={groupInfoindex === 10000 ? handleGroup : handleSignupSubmit}
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
                    className={` hover:text-white text-primarypurple hover-bg-primarypurple-hover px-4 py-2 ${
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

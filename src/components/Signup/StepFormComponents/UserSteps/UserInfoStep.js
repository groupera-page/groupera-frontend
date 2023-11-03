import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineWarning } from "react-icons/ai";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker-override.css";
import { differenceInYears } from "date-fns";
import BirthDatePicker from "../BirthDatePicker";
import TextInput from "../../../UserInputs/TextInput";
import InputError from "../../../UserInputs/InputError";
import PasswordInput from "../../../UserInputs/PasswordInput";
export default function UserInfoStep({
  username,
  email,
  password,
  passwordCheck,
  updateFields,
  gender,

  age,
  birthDate,
  isMinor,
  isAccepted,
  emailError,
  errorUserName,
  errorUserEmail,
  errorUserPass,
  errorUserSecondPass,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckState, setPasswordCheckState] = useState(false);

  useEffect(() => {
    updateFields({ emailError: "Email error" });
    updateFields({ isAccepted: "" });
    if (birthDate !== "") {
      setSelectedDate(birthDate);
    }
    //Clear fields, if no local storage
    // const storedUsername = JSON.parse(localStorage.getItem("username")) || "";
    // updateFields({ username: storedUsername });
  }, []);

  //isMinor state variable instead?
  const checkAge = (date) => {
    const today = new Date();
    const userAge = differenceInYears(today, date);
    updateFields({ age: userAge });
    if (userAge < 18) {
      console.log("18-");
      updateFields({ isMinor: true });
    } else {
      console.log("18+");
      updateFields({ isMinor: false });
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    updateFields({ birthDate: date });
    checkAge(date);
  };

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let year = 1920; year <= currentYear; year++) {
    years.push(year);
  }

  function isStrongPassword(password) {
    const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return strongPasswordRegex.test(password);
  }

  return (
    <div>
      <h2 className="">Erstelle jetzt Dein Nutzerprofil</h2>
      <p className="mb-4 text-textLightGray">
        Du kannst Deine Informationen jederzeit in den Einstellungen ändern.
      </p>

      <TextInput
        value={username}
        onChange={(e) => updateFields({ username: e.target.value })}
        placeholder="Name"
      />
      <InputError
        showMessage={errorUserName && username.length < 3}
        errorMessage={errorUserName}
      />

      <p className="px-1 mb-2 text-textLightGray">
        Bitte gib hier Deinen Namen ein, mit dem Du in der Gruppe angesprochen
        werden möchtest und der für andere Mitglieder:innen angezeigt werden
        darf.
      </p>

      <TextInput
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
        placeholder="Email"
      />
      <InputError
        showMessage={errorUserEmail && email.length < 3}
        errorMessage={errorUserEmail}
      />

      <PasswordInput
        value={password}
        onChange={(e) => {
          if (!isStrongPassword(e.target.value)) {
            setPasswordError(true);
          } else {
            setPasswordError(false);
          }
          updateFields({ password: e.target.value });
        }}
        placeholder="Passwort"
      />
      <p className=" px-1 text-textLightGray">
        Mindestens 8 Zeichen, mindestens eine Zahl, ein Großbuchstabe und ein
        Sonderzeichen.
      </p>
      <InputError
        showMessage={errorUserPass && password.length < 3}
        errorMessage={errorUserPass}
      />
      <InputError
        showMessage={passwordError && password.length > 7}
        errorMessage={
          "Mindestens eine Zahl, ein Großbuchstabe und ein Sonderzeichen."
        }
      />
      {/* Add more checks, if only uppercase is missing display that for example */}

      <PasswordInput
        // value={password}
        onChange={(e) => {
          if (e.target.value !== password) {
            setPasswordCheckState(true);
          } else {
            setPasswordCheckState(false);
          }
          updateFields({ passwordCheck: e.target.value });
        }}
        placeholder="Passwort erneut eingeben"
      />
      <InputError
        showMessage={passwordCheckState}
        errorMessage={"Passwörter stimmen nicht überein"}
      />

      <div className="flex justify-between gap-2 text-sm mt-4">
        <label
          htmlFor="radioOption1"
          className="relative w-1/3 cursor-pointer border border-primaryblue rounded-md text-sm p-2 pl-4 flex items-center gap-4 "
        >
          <div>Weiblich</div>
          <input
            type="radio"
            id="radioOption1"
            name="options"
            value="Weiblich"
            checked={gender === "Weiblich"}
            onChange={(e) => updateFields({ gender: e.target.value })}
            className="mr-1 absolute end-1 md:end-6"
          />
        </label>
        <label
          htmlFor="radioOption2"
          className="relative w-1/3 cursor-pointer border border-primaryblue rounded-md text-sm p-2 pl-4 flex items-center gap-4 "
        >
          <div>Männlich</div>
          <input
            type="radio"
            id="radioOption2"
            name="options"
            value="Mannlich"
            checked={gender === "Mannlich"}
            onChange={(e) => updateFields({ gender: e.target.value })}
            className="mr-1 absolute end-1 md:end-6"
          />
        </label>

        <label
          htmlFor="radioOption3"
          className="relative w-1/3 cursor-pointer border border-primaryblue rounded-md text-sm p-2 pl-4 flex items-center gap-4 "
        >
          <div>Divers</div>
          <input
            type="radio"
            id="radioOption3"
            name="options"
            value="Divers"
            checked={gender === "Divers"}
            onChange={(e) => updateFields({ gender: e.target.value })}
            className="mr-1 absolute end-1 md:end-6"
          />
        </label>
      </div>
      <h4 className="pt-2">Geburtsdatum</h4>
      <div className="flex flex-row">
        <div className="flex gap-2 pb-2">
          <BirthDatePicker
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
            age={age}
          />
          {/* {isMinor && (
          <div className=" rounded-md border-2">
            <div className="bg-white px-1 text-primarypurple text-xs">
              <div className="flex items-center">
                <AiOutlineWarning
                  className="text-red text-primarybg"
                  size={42}
                />
                <span className="ml-2">
                  Um teilzunehmen, musst du über 18 Jahre alt sein.
                </span>{" "}
              </div>
            </div>
          </div>
        )} */}
        </div>
        <div className="flex ml-20">
          <div className="flex gap-3 items-start relative">
            <input
              type="checkbox"
              name="isAccepted"
              value={isAccepted}
              onChange={(e) =>
                updateFields({ isAccepted: e.target.checked ? "accepted" : "" })
              }
              className="absolute top-1 -left-5"
            />

            <p className="text-xs ">
              Ich akzeptiere die{" "}
              <Link to={"/"} className="text-primarypurple">
                Allgemeinen Geschäftsbedingungen
              </Link>{" "}
              und die{" "}
              <Link to={"/"} className="text-primarypurple">
                Datenschutzerklärung{" "}
              </Link>
              von Groupera
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col ">
        <p className=" my-5">
          Bereits registriert?{" "}
          <Link to={"/login"} className="text-primarypurple">
            Hier anmelden.
          </Link>
        </p>
      </div> */}
    </div>
  );
}

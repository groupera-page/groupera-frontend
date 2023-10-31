import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineWarning } from "react-icons/ai";

import "react-datepicker/dist/react-datepicker.css";
import "./datepicker-override.css";
import { differenceInYears } from "date-fns";
import CustomDatePicker from "./customDatePicker";

export default function UserInfoStep({
  username,
  email,
  password,
  updateFields,
  gender,
  isVerified,
  age,
  isMinor,
  isAccepted,
  errorUserName,
  errorUserEmail,
  errorUserPass,
  errorUserSecondPass,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isUnderEighteen, setisUnderEighteen] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);

  useEffect(() => {
    updateFields({ isAccepted: "" });
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
      setisUnderEighteen(true);
    } else {
      console.log("18+");
      updateFields({ isMinor: false });
      setisUnderEighteen(false);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
      <div className="relative">
        <div className=" text-sm border border-primaryblue rounded-md">
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => updateFields({ username: e.target.value })}
            className="w-full border rounded-md p-2 placeholder-primaryText bg-primaryBg"
            placeholder="Name"
          />
        </div>
        <p className="px-1 mb-2 text-textLightGray">
          Bitte gib hier Deinen Namen ein, mit dem Du in der Gruppe angesprochen
          werden möchtest und der für andere Mitglieder:innen angezeigt werden
          darf.
        </p>
        {errorUserName && username.length < 3 && (
          <div className="absolute -bottom-2 left-1/3 transform -translate-x-1/2 rounded-md border-2">
            <div className="bg-white p-2 text-primarypurple text-sm">
              <div className="flex items-center">
                <AiOutlineWarning
                  className="text-red text-primarybg"
                  size={32}
                />
                <span className="ml-2">{errorUserName}</span>{" "}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="relative">
        <div className="mt-4 text-sm border border-primaryblue rounded-md">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
            className={`w-full p-2 border rounded-md placeholder-primaryText bg-primaryBg${
              isVerified ? "text-gray-500" : ""
            }`}
            placeholder="Email"
            disabled={isVerified ? true : false}
          />
        </div>
        {errorUserEmail && email.length < 1 && (
          <div className="transform w-4/5 rounded-md border-2">
            <div className="bg-white p-1 text-primarypurple text-sm">
              <div className="flex items-center">
                <AiOutlineWarning
                  className="text-red text-primarybg"
                  size={32}
                />
                <span className="ml-2">{errorUserEmail}</span>{" "}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="relative">
        <div className="mt-4 text-sm border border-primaryblue rounded-md">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              console.log(e.target.value);
              if (!isStrongPassword(e.target.value)) {
                setPasswordError(true);
              } else {
                setPasswordError(false);
              }

              updateFields({ password: e.target.value });
            }}
            className="w-full p-2 border rounded-md placeholder-primaryText bg-primaryBg"
            placeholder="Passwort"
          />
        </div>
        <p className=" px-1 text-textLightGray">
          Mindestens 8 Zeichen, mindestens eine Zahl, ein Großbuchstabe und ein
          Sonderzeichen.
        </p>
        {errorUserPass && password.length < 8 && (
          <div className="transform w-4/5 rounded-md border-2">
            <div className="bg-white p-2 text-primarypurple text-sm">
              <div className="flex items-center">
                <AiOutlineWarning
                  className="text-red text-primarybg"
                  size={32}
                />
                <span className="ml-2">{errorUserPass}</span>{" "}
              </div>
            </div>
          </div>
        )}
        {passwordError && password.length > 7 && (
          <div className="absolute w-4/5 -bottom-7 transform rounded-md border-2 z-20">
            <div className="bg-white p-2 text-primarypurple text-sm">
              <div className="flex items-center">
                <AiOutlineWarning
                  className="text-red text-primarybg"
                  size={32}
                />
                <span className="ml-2">
                  Mindestens eine Zahl, ein Großbuchstabe und ein Sonderzeichen.
                </span>{" "}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="relative z-10">
        <div className="mt-4 text-sm border border-primaryblue rounded-md">
          <input
            type="password"
            name="passwordCheck"
            // value={passwordCheck}
            onChange={(e) => {
              if (e.target.value !== password) {
                setPasswordCheck(true);
              } else {
                setPasswordCheck(false);
              }
              updateFields({ passwordCheck: e.target.value });
            }}
            className="w-full p-2 border rounded-md placeholder-primaryText bg-primaryBg"
            placeholder="Passwort erneut eingeben"
          />
        </div>
        {passwordCheck && (
          <div className="absolute w-4/5  bg-whitetransform rounded-md border-2">
            <div className="bg-white p-2 text-primarypurple text-sm">
              <div className="flex items-center">
                <AiOutlineWarning
                  className="text-red text-primarybg"
                  size={32}
                />
                <span className="ml-2">passwords do not match</span>{" "}
              </div>
            </div>
          </div>
        )}
      </div>
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
      <div className="flex gap-2 ">
        <CustomDatePicker
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
        />
        {isMinor && (
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
        )}
      </div>
      <div className="flex flex-row items-star my-2">
        <div className="pt-3 px-3 flex gap-3">
          <input
            type="checkbox"
            name="isAccepted"
            value={isAccepted}
            onChange={(e) =>
              updateFields({ isAccepted: e.target.checked ? "accepted" : "" })
            }
            className=""
          />

          <p className="text-xs">
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

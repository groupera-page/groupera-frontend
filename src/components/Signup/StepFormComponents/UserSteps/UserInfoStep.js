// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import "react-datepicker/dist/react-datepicker.css";
// import "../datepicker-override.css";
// import DateScroller from "../../../../util/DateScroller";
// import TextInput from "../../../UserInputs/TextInput";
// import InputError from "../../../UserInputs/InputError";
// import PasswordInput from "../../../UserInputs/PasswordInput";
// import RadioButton from "../../../UserInputs/RadioButton";
// import Checkbox from "../../../UserInputs/Checkbox";
// import {
//   ageValidation,
//   validatePassword,
//   validateEmail,
// } from "../../../../util/formValidation";
// export default function UserInfoStep({
//   username,
//   email,
//   password,
//   passwordCheck,
//   updateFields,
//   gender,
//   age,
//   birthDate,
//   isMinor,
//   isAccepted,
//   emailError,
//   errorUserName,
//   errorUserEmail,
//   errorUserPass,
//   errorUserSecondPass,
// }) {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [passwordError, setPasswordError] = useState("");
//   const [passwordCheckState, setPasswordCheckState] = useState(false);
//   const [hasBlurred, setHasBlurred] = useState(false);

//   useEffect(() => {
//     // updateFields({ emailError: "Email error" });
//     // updateFields({ isAccepted: "" });
//     if (birthDate !== "") {
//       setSelectedDate(birthDate);
//     }
//     //Clear fields, if no local storage
//     // const storedUsername = JSON.parse(localStorage.getItem("username")) || "";
//     // updateFields({ username: storedUsername });
//   }, []);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     updateFields({ birthDate: date });
//     ageValidation(date, updateFields);
//   };

//   function updateErrorOnBlur(dataField, errorText) {
//     return () => {
//       const updatedField = {};
//       updatedField[dataField] = errorText;
//       updateFields(updatedField);
//     };
//   }

//   const handleEmailBlur = (e) => {
//     validateEmail(e.target.value, updateFields);
//     setHasBlurred(true);
//   };

//   const handlePasswordBlur = (e) => {
//     // validateEmail(e.target.value, updateFields);
//     // setHasBlurred(true);
//     validatePassword(e.target.value, updateFields);
//   };

//   const years = [];
//   const currentYear = new Date().getFullYear();
//   for (let year = 1920; year <= currentYear; year++) {
//     years.push(year);
//   }

//   // function isStrongPassword(password) {
//   //   const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
//   //   return strongPasswordRegex.test(password);
//   // }

//   return (
//     <div>
//       <h2 className="">Erstelle jetzt Dein Nutzerprofil</h2>
//       <p className="mb-4 text-TEXT_LIGHTGRAY">
//         Du kannst Deine Informationen jederzeit in den Einstellungen ändern.
//       </p>

//       <TextInput
//         value={username}
//         onChange={(e) => updateFields({ username: e.target.value })}
//         placeholder="Name"
//         onFocusOut={updateErrorOnBlur(
//           "errorUserName",
//           "Bitte geben Sie Ihren Gruppenname an. Mindestens drei Zeichen"
//         )}
//       />
//       <InputError
//         showMessage={errorUserName && username.length < 3}
//         errorMessage={errorUserName}
//       />

//       <p className="px-1 mb-2 text-TEXT_LIGHTGRAY">
//         Bitte gib hier Deinen Namen ein, mit dem Du in der Gruppe angesprochen
//         werden möchtest und der für andere Mitglieder:innen angezeigt werden
//         darf.
//       </p>

//       <TextInput
//         value={email}
//         onChange={(e) => {
//           updateFields({ email: e.target.value });
//           if (hasBlurred) {
//             validateEmail(e.target.value, updateFields);
//           }
//         }}
//         placeholder="Email"
//         onFocusOut={handleEmailBlur}
//       />
//       <InputError
//         showMessage={errorUserEmail !== ""}
//         errorMessage={errorUserEmail}
//       />

//       <PasswordInput
//         value={password}
//         onChange={(e) => {
//           updateFields({ password: e.target.value });
//           validatePassword(e.target.value, updateFields);
//           if (hasBlurred) {
//           }
//         }}
//         placeholder="Passwort"
//       />
//       <p className=" px-1 text-TEXT_LIGHTGRAY">
//         Mindestens 8 Zeichen, mindestens eine Zahl, ein Großbuchstabe und ein
//         Sonderzeichen.
//       </p>
//       <InputError showMessage={errorUserPass} errorMessage={errorUserPass} />
//       {/* <InputError
//         showMessage={passwordError && password.length > 7}
//         errorMessage={
//           "Mindestens eine Zahl, ein Großbuchstabe und ein Sonderzeichen."
//         }
//       /> */}
//       {/* Add more checks, if only uppercase is missing display that for example */}

//       <PasswordInput
//         onChange={(e) => {
//           updateFields({ passwordCheck: e.target.value });
//         }}
//         placeholder="Passwort erneut eingeben"
//         onFocusOut={(e) => {
//           const confirmPassword = e.target.value;
//           if (confirmPassword !== password) {
//             setPasswordCheckState(true);
//           } else {
//             setPasswordCheckState(false);
//           }
//         }}
//       />

//       <InputError
//         showMessage={passwordCheckState}
//         errorMessage={"Passwörter stimmen nicht überein"}
//       />

//       <div className="flex gap-2 mt-4">
//         <RadioButton
//           id={"genderOption1"}
//           title={"Weiblich"}
//           checkedVariable={gender}
//           onChange={(e) => updateFields({ gender: e.target.value })}
//         />
//         <RadioButton
//           id={"genderOption2"}
//           title={"Männlich"}
//           checkedVariable={gender}
//           onChange={(e) => updateFields({ gender: e.target.value })}
//         />
//         <RadioButton
//           id={"genderOption3"}
//           title={"Divers"}
//           checkedVariable={gender}
//           onChange={(e) => updateFields({ gender: e.target.value })}
//         />
//       </div>

//       <div className="">
//         <div className="flex gap-2 pb-2 justify-center mt-4">
//           <DateScroller
//             selectedDate={selectedDate}
//             handleDateChange={handleDateChange}
//             age={age}
//             label={"Geburtsdatum"}
//           />
//         </div>

//         <div className="flex items-start justify-center px-2 mt-2">
//           <Checkbox
//             value={isAccepted}
//             onChange={(e) => {
//               updateFields({
//                 isAccepted: e.target.checked ? "accepted" : "",
//               });
//               console.log("clicked");
//             }}
//           />
//           <p className="text-xs ">
//             Ich akzeptiere die{" "}
//             <Link to={"/"} className="text- PURPLE_PRIMARY">
//               Allgemeinen Geschäftsbedingungen <br />
//             </Link>{" "}
//             und die{" "}
//             <Link to={"/"} className="text- PURPLE_PRIMARY">
//               Datenschutzerklärung{" "}
//             </Link>
//             von Groupera
//           </p>
//         </div>
//       </div>
//       {/* <div className="flex flex-col ">
//         <p className=" my-5">
//           Bereits registriert?{" "}
//           <Link to={"/login"} className="text- PURPLE_PRIMARY">
//             Hier anmelden.
//           </Link>
//         </p>
//       </div> */}
//     </div>
//   );
// }

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function UserForm({
  username,
  email,
  password,
  passwordCheck,
  updateFields,
  gender,
  isAccepted,
}) {
  return (
    <div>
      <h2 className="my- mx-2">Erstelle jetzt Dein Nutzerprofil</h2>
      <p className="text-sm m-2">
        Du kannst Deine Informationen jederzeit in den Einstellungen ändern.
      </p>
      <div className="my-4 relative">
        <input
          required
          type="text"
          name="username"
          value={username}
          onChange={(e) => updateFields({ username: e.target.value })}
          className="w-full border rounded-md p-2 "
          placeholder="Name"
        />
        <p className="text-xs my-2 text-textLightGray px-2">
          Bitte gib hier Deinen Namen ein, mit dem Du in der Gruppe angesprochen
          werden möchtest und der für andere Mitglieder:innen angezeigt werden
          darf.
        </p>
      </div>
      <div className="mb-4 relative">
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          className="w-full p-2 border rounded-md  "
          placeholder="Email"
        />
      </div>
      <div className="mb-2 relative">
        <input
          required
          type="password"
          name="password"
          value={password}
          onChange={(e) => updateFields({ password: e.target.value })}
          className="w-full p-2 border rounded-md  "
          placeholder="Passwort"
        />
        <p className="text-xs px-2 text-textLightGray">Min 8 Zeichen.</p>
      </div>
      <div className="mb-4 relative">
        <input
          required
          type="passwordCheck"
          name="passwordCheck"
          // value={passwordCheck}
          onChange={(e) => updateFields({ passwordCheck: e.target.value })}
          className="w-full p-2 border rounded-md  "
          placeholder="Passwort erneut eingeben"
        />
      </div>
      <div className="flex justify-between gap-2 text-sm">
        <div className="border border-gray-300 p-2 w-1/3 rounded-lg flex items-center">
          <input
            type="radio"
            name="options"
            value="option1"
            checked={gender === "option1"}
            onChange={(e) => updateFields({ gender: e.target.value })}
            className="mr-2"
          />
          <label>Weiblich</label>
        </div>
        <div className="border border-gray-300 px-4  w-1/3 rounded-lg flex items-center">
          <input
            type="radio"
            name="options"
            value="option2"
            checked={gender === "option2"}
            onChange={(e) => updateFields({ gender: e.target.value })}
            className="mr-2"
          />
          <label>Männlich</label>
        </div>
        <div className="border border-gray-300 px-3 w-1/3 rounded-lg flex items-center">
          <input
            type="radio"
            name="options"
            value="option3"
            checked={gender === "option3"}
            onChange={(e) => updateFields({ gender: e.target.value })}
            className="mr-2"
          />
          <label>Divers</label>
        </div>
      </div>
      <div className="flex flex-row items-start ">
        <div className=" flex flex-row  mt-4 ">
          <input
            type="checkbox"
            name="isAccepted"
            value="checked"
            // checked={isAccepted === true}
            onChange={(e) => updateFields({ isAccepted: e.target.value })}
            className="self-left"
          />
        </div>
        <div className="pt-3 px-3">
          <p className="text-xs">
            Ich akzeptiere die{" "}
            <Link to={"/login"} className="text-primarypurple">
              Allgemeinen Geschäftsbedingungen
            </Link>{" "}
            und die{" "}
            <Link to={"/login"} className="text-primarypurple">
              Datenschutzerkärung{" "}
            </Link>
            von Groupera
          </p>
        </div>
      </div>
      <div className="flex flex-col ">
        <p className=" pt-5">
          Bereits registriert?{" "}
          <Link to={"/login"} className="text-primarypurple">
            Hier anmelden.
          </Link>
        </p>
      </div>
    </div>
  );
}

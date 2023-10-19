import React, { useEffect } from "react";
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
  isVerified,
}) {
  useEffect(() => {
    // if (!isVerified) {
    //   updateFields({ email: "" });
    // }

    updateFields({ isAccepted: "" });
  }, []);

  return (
    <div>
      <h2 className=" mx-2">Erstelle jetzt Dein Nutzerprofil</h2>
      <p className=" m-2 ">
        Du kannst Deine Informationen jederzeit in den Einstellungen ändern.
      </p>
      <div>
        <div className="mt-4 text-sm border border-primaryblue rounded-md">
          <input
            required
            type="text"
            name="username"
            value={username}
            onChange={(e) => updateFields({ username: e.target.value })}
            className="w-full border rounded-md p-2 placeholder-primaryText"
            placeholder="Name"
          />
        </div>
        <p className=" mb-2 text-textLightGray px-2">
          Bitte gib hier Deinen Namen ein, mit dem Du in der Gruppe angesprochen
          werden möchtest und der für andere Mitglieder:innen angezeigt werden
          darf.
        </p>
      </div>
      <div className="mt-4 text-sm border border-primaryblue rounded-md">
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          className={`w-full p-2 border rounded-md placeholder-primaryText ${
            isVerified ? "text-gray-500" : ""
          }`}
          placeholder="Email"
          disabled={isVerified ? true : false}
        />
      </div>
      <div>
        <div className="mt-4 text-sm border border-primaryblue rounded-md">
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={(e) => updateFields({ password: e.target.value })}
            className="w-full p-2 border rounded-md placeholder-primaryText "
            placeholder="Passwort"
          />
        </div>
        <p className=" px-2 text-textLightGray">Min 8 Zeichen.</p>
      </div>
      <div className="mt-4 text-sm border border-primaryblue rounded-md">
        <input
          required
          type="password"
          name="passwordCheck"
          // value={passwordCheck}
          onChange={(e) => updateFields({ passwordCheck: e.target.value })}
          className="w-full p-2 border rounded-md placeholder-primaryText "
          placeholder="Passwort erneut eingeben"
        />
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
      <div className="flex flex-row items-star my-2">
        <div className="pt-3 px-3 flex gap-3">
          <input
            type="checkbox"
            name="isAccepted"
            onChange={(e) =>
              updateFields({ isAccepted: e.target.checked ? "Accepted" : "" })
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
              Datenschutzerkärung{" "}
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

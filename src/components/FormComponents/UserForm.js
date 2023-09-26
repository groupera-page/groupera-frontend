import React from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function UserForm({ username, email, password, updateFields }) {
  return (
    <div>
      {" "}
      <h2 className="">Erstelle jetzt dein Nutzerprofil</h2>
      <p>Du kannst deine Informationen jederzeit in den Einstellungen ändern</p>
      <div className="my-4 relative">
        <input
          required
          type="text"
          name="username"
          value={username}
          onChange={(e) => updateFields({ username: e.target.value })}
          className="w-full p-2 border rounded-md pl-2 "
          placeholder="Name"
        />
      </div>
      <div className="mb-4 relative">
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          className="w-full p-2 border rounded-md pl-2 "
          placeholder="Email"
        />
      </div>
      <div className="mb-4 relative">
        <input
          required
          type="password"
          name="password"
          value={password}
          onChange={(e) => updateFields({ password: e.target.value })}
          className="w-full p-2 border rounded-md pl-2 "
          placeholder="Passwort"
        />
      </div>
      <div className="flex items-center">
        <p className="my-8 mr-4">
          Ich habe bereits ein Account.{" "}
          <Link to={"/login"} className="text-primarypurple">
            Hier anmelden
          </Link>
        </p>

        {/* <button
                type="submit"
                className={` ml-12 flex items-center justify-center bg-primarypurple text-slate-100 hover:text-white p-2 px-5 rounded-md whitespace-nowrap transition-color duration-300 ease-in-out lg:text-base text-1xl`}
              >
                Weiter
              </button> */}
      </div>
    </div>
  );
}

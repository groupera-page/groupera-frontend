import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logoSvg from "../assets/imgLogos/logoNoBg.svg";
import axios from "axios";
import RegStepper from "./RegStepper";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [goals, setGoals] = useState("");
  const [experience, setExperience] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleGoals = (e) => setGoals(e.target.value);
  const handleExperience = (e) => setExperience(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = { username, email, password, goals, experience };

    axios
      .post(`http://localhost:5005/user/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="flex justify-center rounded p-12 bg-primaryBg/90 ">
      <div className="lg:flex justify-center">
        <div className="flex flex-col  mt-10 gap-5">
          <RegStepper />
          <img src={logoSvg} alt="logo" className="w-60 mb-12" />
          <h2 className="">Erstelle jetzt dein Nutzerprofil</h2>
          <p>
            Du kannst deine Informationen jederzeit in den Einstellungen ändern
          </p>

          <form onSubmit={handleSignupSubmit} className="mt-4">
            <div className="mb-4 relative">
              <input
                type="text"
                name="goals"
                value={goals}
                onChange={handleGoals}
                className="w-full p-2 border rounded-md pl-2 "
                placeholder="Goals"
              />
            </div>

            <div className="mb-4 relative">
              <input
                type="text"
                name="experience"
                value={experience}
                onChange={handleExperience}
                className="w-full p-2 border rounded-md pl-2 "
                placeholder="Experience"
              />
            </div>

            <div className="mb-4 relative">
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleUsername}
                className="w-full p-2 border rounded-md pl-2 "
                placeholder="Username"
              />
            </div>

            <div className="mb-4 relative">
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleEmail}
                className="w-full p-2 border rounded-md pl-2 "
                placeholder="Email"
              />
            </div>

            <div className="mb-4 relative">
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
                className="w-full p-2 border rounded-md pl-2 "
                placeholder="Password"
              />
            </div>

            <div className="flex items-center">
              <p className="my-8 mr-4">
                Ich habe bereits ein Account.{" "}
                <Link to={"/login"} className="text-primarypurple">
                  Hier anmelden
                </Link>
              </p>

              <button
                type="submit"
                className={` ml-12 flex items-center justify-center bg-primarypurple text-slate-100 hover:text-white p-2 px-5 rounded-md whitespace-nowrap transition-color duration-300 ease-in-out lg:text-base text-1xl`}
              >
                Weiter
              </button>
            </div>
          </form>

          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

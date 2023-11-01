import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import authService from "../services/auth.service";
import logoSvg from "../assets/imgLogos/logoNoBg.svg";

export default function LandingCard({ page, id }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    authService
      .login(requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        if (response.data.goals !== "") {
          navigate("/");
        } else {
          navigate("/signup");
        }
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div
      className="lg:sticky w-full h-full  lg:w-1/2 lg:h-5/6 overflow-y-scroll
    px-4 rounded md:shadow-md bg-primaryBg md:p-8 md:bg-primaryBg/80"
    >
      <div className="lg:flex  justify-center">
        {/* <div className="lg:flex lg:w-1/2 justify-center"> */}
        <div className="flex flex-col items-center mt-10 gap-5">
          <img src={logoSvg} alt="logo" className="w-60 mb-12" />
          <h2 className="mb-5">Anmelden</h2>
          <p>jetzt einloggen und alle Gruppen und Termine sehen</p>

          <form onSubmit={handleLoginSubmit} className="mt-4">
            <div className="mb-4 relative">
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleEmail}
                className="w-full p-2 border rounded-md pl-2 lg:w-96"
                placeholder="Email"
              />
            </div>

            <div className="mb-4 relative">
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
                className="w-full p-2 border rounded-md pl-2 lg:w-96"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col items-center ">
              <p className="my-8 ">
                Du hast noch kein Konto?{" "}
                <Link to={"/signup"} className="text-primarypurple">
                  Jetzt Registrieren
                </Link>
              </p>

              <button
                type="submit"
                className={` items-center bg-primarypurple text-slate-100 hover:text-white p-2 rounded-md whitespace-nowrap transition-color duration-300 ease-in-out lg:text-base text-1xl`}
              >
                Anmelden
              </button>
            </div>
          </form>

          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>
      </div>

      {/* <div className="flex xl:px-4 lg:w-1/2 items-center justify-center">
        <img src={tree_lowres} alt="" className="rounded-md" />
      </div> */}
    </div>
  );
}

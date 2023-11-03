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
          console.log("LOGGED IN");
          navigate("/home");
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
      className=" w-full h-full fixed md:w-1/2 lg:h-fit
      px-4 rounded md:shadow-md bg-primaryBg md:p-4 "
    >
      <div className="lg:flex justify-center">
        {/* <div className="lg:flex lg:w-1/2 justify-center"> */}
        <div className="flex flex-col items-center mt-10 gap-5">
          <img src={logoSvg} alt="logo" className="w-60 mb-12" />
          <h2 className="mb-5">Anmelden</h2>
          <p>jetzt einloggen und alle Gruppen und Termine sehen</p>

          <form onSubmit={handleLoginSubmit} className="mt-4">
            <div className="mb-4 relative ">
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleEmail}
                className="w-full p-2 border bg-primaryBg rounded-md pl-2 lg:w-96 border-primaryblue"
                placeholder="Email"
              />
            </div>

            <div className="mb-4 relative">
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
                className="w-full p-2 border bg-primaryBg rounded-md pl-2 lg:w-96 border-primaryblue"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col items-center ">
              <p className="my-8 ">
                Du hast noch kein Konto?{" "}
                <Link to={"/signup-option"} className="text-primarypurple">
                  Jetzt Registrieren
                </Link>
              </p>

              <button
                type="submit"
                className={` mb-4 items-center bg-primarypurple text-slate-100 hover:text-white p-2 rounded-md whitespace-nowrap transition-color duration-300 ease-in-out lg:text-base text-1xl`}
              >
                Anmelden
              </button>
            </div>
          </form>

          {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

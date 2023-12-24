import React from "react";
import logoSvg from "../../../assets/imgLogos/logoNoBg.svg";
import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import {authFields, required} from "../../../util/form.helper";
import { logInUser } from "../authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await dispatch(logInUser(values));

      if (response.error) throw Error(response.error.message);

      navigate("/");
    } catch (e) {
      // handle the error response
      console.log(e);
    }
  };

  return (
    <div className="flex justify-center min-h-[100vh] bg-BG_PRIMARY rounded px-4">
      <div className="lg:flex justify-center">
        <div className="flex flex-col items-center mt-10 gap-5 ">
          <img src={logoSvg} alt="logo" className="w-60 mb-12" />
          <h2 className="mb-5">Anmelden</h2>
          <div className="paragraph-sm">
            jetzt einloggen und alle Gruppen und Termine sehen
          </div>
          <div className="max-w-sm lg:px-4">
            <AuthForm
              fields={[authFields.email, {...authFields.password, validate: [required]}]}
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col items-center">
                <div className="flex flex-col gap-4 my-4 items-center">
                  <div className="paragraph-sm">
                    Du hast noch kein Konto?{" "}
                    <Link to={"/auth/signup"} className="text-PURPLE_SECONDARY">
                      Jetzt Registrieren
                    </Link>
                  </div>
                  <div className="paragraph-sm text-center">
                    Du hast dein Passwort vergessen?{" "}
                    <Link to={"/auth/forgotPassword"} className="text-PURPLE_SECONDARY">
                      Passwort zurücksetzen
                    </Link>
                  </div>
                </div>
                <PrimaryButton type="submit" isLarge={true}>
                  Anmelden
                </PrimaryButton>
                {/* <button
                  type="submit"
                  className={` items-center bg-PURPLE_SECONDARY text-slate-100 hover:text-white p-2 rounded-md whitespace-nowrap transition-color duration-300 ease-in-out lg:text-base text-1xl`}
                >
                  Anmelden
                </button> */}
              </div>
            </AuthForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

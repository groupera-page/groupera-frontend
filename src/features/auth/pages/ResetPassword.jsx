import React from "react";
import logoSvg from "../../../assets/imgLogos/logoNoBg.svg";
import {Link, useParams} from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import { authFields } from "../../../util/form.helper";
import {resetPassword} from "../authSlice";

const ResetPassword = () => {
  const {resetPasswordToken} = useParams()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await dispatch(resetPassword({token: resetPasswordToken, password: values.password}));

      if (response.error) {
        navigate("/auth/forgotPassword")
        throw Error(response.error.message);
      }

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
              fields={[authFields.password, authFields.passwordConfirmation]}
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col items-center">
                <div className="flex flex-col gap-4 my-4 items-center">
                  <div className="paragraph-sm">
                    Ist Dir Dein Passwort wieder eingefallen?{" "}
                    <Link to={"/auth/login"} className="text-PURPLE_SECONDARY">
                      Zurück zum Login
                    </Link>
                  </div>
                </div>
                <PrimaryButton type="submit" isLarge={true}>
                  Passwort speichern
                </PrimaryButton>
              </div>
            </AuthForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

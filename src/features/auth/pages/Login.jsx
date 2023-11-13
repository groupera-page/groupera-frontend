import React from "react";
import logoSvg from "../../../assets/imgLogos/logoNoBg.svg";
import {Link} from "react-router-dom";
import {authFields} from "../../../util/form.helper";
import AuthForm from "../components/AuthForm";
import {useDispatch} from "react-redux";
import {logInUser} from "../authSlice";

const Login = () => {
  const dispatch = useDispatch()

  const handleSubmit = async (values) => {
    try {
      const response = await dispatch(logInUser(values))

      // if (response.error) throw Error(response.error.message)
      console.log(response)
    } catch (e) {
      // handle the error response
      console.log(e)
    }
  }


  return (
    <div className="flex justify-center bg-primaryBg rounded p-12 bg-primaryBg/90 ">
      <div className="lg:flex  justify-center">
        <div className="flex flex-col items-center mt-10 gap-5">
          <img src={logoSvg} alt="logo" className="w-60 mb-12" />
          <h2 className="mb-5">Anmelden</h2>
          <p>jetzt einloggen und alle Gruppen und Termine sehen</p>
          <AuthForm
            fields={[
              authFields.email, authFields.password
            ]}
            onSubmit={handleSubmit}
          >
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
          </AuthForm>
        </div>
      </div>

      {/* <div className="flex xl:px-4 lg:w-1/2 items-center justify-center">
        <img src={tree_lowres} alt="" className="rounded-md" />
      </div> */}
    </div>
  )
}

export default Login;

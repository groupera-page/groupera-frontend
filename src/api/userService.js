import axios from "axios";

export const validateUser = (userData, updateFields, setErrorMessage, step) => {
  if (step && step.type.name === "UserInfoStep") {
    if (userData.username.length < 3) {
      updateFields({
        errorUserName: "Bitte geben Sie Ihren Username an.",
      });
      return;
    }
    //User error checks
    if (userData.email.length < 1) {
      updateFields({
        errorUserEmail: "Bitte geben Sie eine E-Mail Adresse ein.",
      });

      return;
    }

    if (userData.password.length < 1) {
      updateFields({
        errorUserPass: "Bitte geben Sie Ihr Passwort an.",
      });

      return;
    }

    //******************* */
    if (userData.isMinor === true) {
      setErrorMessage("Du musst älter als 18 Jahre sein.");
      return;
    }

    if (userData.password !== userData.passwordCheck) {
      setErrorMessage("Passwörter stimmen nicht überein");
      return;
    }

    if (userData.isAccepted !== "accepted") {
      setErrorMessage("Bitte akzeptieren Sie die Bedingungen");
      return;
    }
  }
  return true;
};

export const verifyCode = async (
  userData,
  setCurrentUser,
  setisVerified,
  setErrorMessage,
  isLastStep,
  navigate
) => {
  const codeString = userData.code.join("");

  try {
    const response = await axios.post("http://localhost:5005/user/verified", {
      code: codeString,
    });

    if (response.status === 200) {
      const userInfo = await axios.get(
        `http://localhost:5005/user/${userData.email}`
      );
      setCurrentUser(userInfo.data._id);
      localStorage.setItem("currentUser", JSON.stringify(userInfo.data._id));
      setisVerified(true);
      localStorage.setItem("isVerified", JSON.stringify(true));
      setErrorMessage("");
      return true;
    } else {
      setErrorMessage("Falscher Verifizierungscode.");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    setErrorMessage("Error occurred during verification.");
    return false;
  }
};

export const createUser = async (
  userData,
  isVerified,
  currentUser,
  setErrorMessage,
  navigate
) => {
  const requestBody = {
    username: userData.username,
    email: userData.email,
    password: userData.password,
  };

  try {
    if (!isVerified) {
      console.log("CREATE new user");
      await axios.post(`http://localhost:5005/user/signup`, requestBody);
      setErrorMessage("");
      return true;
      // } else {
      //   console.log("Update user", currentUser);
      //   await axios.put(
      //     `http://localhost:5005/user/edit/${currentUser}`,
      //     requestBody
      //   );
      //   setErrorMessage("");
      //   return true;
    }
  } catch (error) {
    const errorDescription = error.response.data.message;
    setErrorMessage(errorDescription);
    return false;
  }
};

export const updateUser = async (
  userData,
  isVerified,
  currentUser,
  setErrorMessage,
  navigate
) => {
  const requestBody = {
    username: userData.username,
    email: userData.email,
    password: userData.password,
  };

  try {
    console.log("Update user", currentUser);
    await axios.put(
      `http://localhost:5005/user/edit/${currentUser}`,
      requestBody
    );
    setErrorMessage("");
    return true;
  } catch (error) {
    const errorDescription = error.response.data.message;
    setErrorMessage(errorDescription);
    return false;
  }
};

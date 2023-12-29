import { differenceInYears } from "date-fns";
// Validate "realtime" input

export const validateEmail = (email, updateFields) => {
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|mil|biz|info|io|co|uk|us|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)$/; // Include desired top-level domains

  if (!emailRegex.test(email)) {
    updateFields({
      errorUserEmail: "Bitte geben Sie eine gültige E-Mail Adresse ein.",
    });
    return false;
  } else {
    updateFields({ errorUserEmail: "" });
    return true;
  }
};

export const ageValidation = (date, updateFields) => {
  const today = new Date();
  const userAge = differenceInYears(today, date);
  updateFields({ age: userAge });

  if (userAge < 18) {
    updateFields({ isMinor: true });
  } else {
    updateFields({ isMinor: false });
  }
};

export const validatePassword = (password, updatedFields) => {
  const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  const errors = [];

  //Mindestens 8 Zeichen, mindestens eine Zahl, ein Großbuchstabe und ein Sonderzeichen.
  if (!strongPasswordRegex.test(password)) {
    if (password.length < 8) {
      errors.push("Mindestens 8 Zeichen,");
    }
    if (!/(?=.*\d)/.test(password)) {
      errors.push("mindestens eine Zahl,");
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      errors.push("ein Großbuchstabe,");
    }
    if (!/(?=.*[\W_])/.test(password)) {
      errors.push("ein Sonderzeichen.");
    }
  }
  updatedFields({ errorUserPass: errors.join(" ") });
};

// Validate after onsubmit

export const validateGroupForm = (groupData, updateGroupFields) => {
  if (groupData.name.length < 3) {
    updateGroupFields({
      errorGroupName: "Bitte geben Sie Ihren Gruppenname an.",
    });
    return false;
  }

  if (groupData.description.length < 3) {
    updateGroupFields({
      errorGroupDescription: "Bitte geben Sie mindestens drei Zeichen ein",
    });
    return false;
  }

  return true;
};

export const validateUserForm = (
  userData,
  updateFields,
  setErrorMessage,
  step
) => {
  if (step && step.type.name === "UserInfoStep") {
    if (userData.username.length < 3) {
      updateFields({
        errorUserName:
          "Bitte geben Sie Ihren Gruppenname an. Mindestens drei Zeichen",
      });
      return;
    }

    if (userData.email.length < 2) {
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

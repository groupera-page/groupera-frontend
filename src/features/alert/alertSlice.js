import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import {registerUser, resendEmailVerificationCode, requestPasswordReset, resetPassword} from "../auth/authSlice";
import {
  isAuthenticated,
  logInUser,
  logout,
  refreshToken,
} from "../auth/authSlice";
import {updateProfile} from "../profile/profileSlice";

export const getNewAlert = (type, header, desc, expiry = 5000) => {
  return {
    id: uuidv4(),
    header,
    desc,
    type,
    expiry,
  };
};

const initialState = {
  items: [],
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    addAlert: (state, { payload }) => {
      state.items.push(payload);
    },
    removeAlert: (state, { payload }) => {
      state.items = state.items.filter((a) => a.id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logInUser.rejected, (state) => {
        state.items.push(
          getNewAlert(
            "error",
            "LogIn fehlgeschlagen",
            "falsches Passwort oder Email-Adresse",
            3000
          )
        );
      })
      .addCase(refreshToken.rejected, (state) => {
        state.items.push(
          getNewAlert(
            "error",
            "Anmeldedaten abgelaufen",
            "Du musst dich erneut Anmelden, um Zugriff zu erhalten"
          )
        );
      })
      .addCase(isAuthenticated.fulfilled, (state) => {
        state.items.push(
          getNewAlert(
            "success",
            "Anmeldedaten gültig",
            "Du bist bereits angemeldet"
          )
        );
      })
      .addCase(logInUser.fulfilled, (state) => {
        state.items.push(
          getNewAlert(
            "success",
            "Super, du bist dabei.",
            "Du bist erfolgreich eingeloggt. Wir wünschen einen schönen Austausch!"
          )
        );
      })
      .addCase(logout.fulfilled, (state) => {
        state.items.push(
          getNewAlert(
            "success",
            "Du hast dich erfolgreich ausgeloggt.",
            "Wir freuen uns, wenn du das nächste Mal wieder dabei bist."
          )
        );
      })
      .addCase(registerUser.rejected, (state) => {
        state.items.push(getNewAlert("error", "Falsch oder Unvollständig"));
      })
      .addCase(updateProfile.fulfilled, (state) => {
        state.items.push(
          getNewAlert(
            "success",
            "Profil erfolgreich geupdated",
          )
        );
      })
      .addCase(updateProfile.rejected, (state) => {
        state.items.push(getNewAlert("error", "Etwas ist schiefgegangen", "Dein Profil konnte nicht geupdated werden."));
      })
      .addCase(resendEmailVerificationCode.fulfilled, (state) => {
        state.items.push(getNewAlert("success", "Email gesendet", "Ein neuer Verifizierungscode wurde an Deine Email adresse gesendet"));
      })
      .addCase(requestPasswordReset.fulfilled, (state) => {
        state.items.push(getNewAlert("success", "Email gesendet", "Ein Link zum Passwort zurücksetzen wurde an Deine Email adresse gesendet"));
      })
      .addCase(resetPassword.rejected, (state) => {
        state.items.push(getNewAlert("error", "Token ungültig", "Bitte fordere einen neuen Link an um dein Passwort zurückzusetzen."));
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.items.push(getNewAlert("success", "Passwort erfolgreich geändert", "Dein Passwort wurde erfolgreich geändert und Du bist eingeloggt."));
      });
  },
});

export const { addAlert, removeAlert } = alertSlice.actions;

export const selectAlerts = (state) => state.alerts;

export default alertSlice.reducer;

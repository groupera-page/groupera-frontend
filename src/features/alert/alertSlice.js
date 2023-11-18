import {createSlice} from "@reduxjs/toolkit";
import {v4 as uuidv4} from "uuid";
import {logInUser, logout, refreshToken} from "../auth/authSlice";

export const getNewAlert = (type, header, desc, expiry=5000) => {
  return {
    id: uuidv4(),
    header,
    desc,
    type,
    expiry
  }
}

const initialState = {
  items: [],
};

const alertSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAlert: (state, {payload}) => {
      state.items.push(payload)
    },
    removeAlert: (state, {payload}) => {
      state.items = state.items.filter(a => a.id !== payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logInUser.rejected, (state) => {
        state.items.push(getNewAlert("error", "Login failed", "Wrong email or password", 3000))
      })
      .addCase(refreshToken.rejected, (state) => {
        state.items.push(getNewAlert("error", "Credentials expired", "You need to log in again to gain access"))
      })
      .addCase(logInUser.fulfilled, (state) => {
        state.items.push(getNewAlert("success", "Your in!", "Successfully logged in. Have fun!"))
      })
      .addCase(logout, (state) => {
        state.items.push(getNewAlert("success", "Logged out", "Bye bye, log in again to gain access"))
      })
  },
});

export const {addAlert, removeAlert} = alertSlice.actions;

export const selectAlerts = (state) => state.alerts;

export default alertSlice.reducer;

import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import authService from "./authApi";

import tokenService from "../../util/tokenServices";

const initialState = {
  token: false,
  loading: true,
  error: null,
  user: null,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (formValues) => {
    const result = await authService.register(formValues)
    return result.data
  },
);

export const logInUser = createAsyncThunk(
  "auth/login",
  async ({email, password}) => {
    const result = await authService.login(email, password)
    return result.data
  },
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async () => {
    // const currentRefreshToken = tokenService.getLocalRefreshToken();
    const result = await authService.refreshToken()
    return result.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: state => {
      tokenService.removeUser()
      state.token = null;
      state.loading = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.error = action.error.message
        tokenService.removeUser()
      })
      .addCase(registerUser.pending, state => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.token = payload.authToken;
        state.user = payload.data;
        tokenService.updateTokens(payload.authToken, payload.refreshToken)
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.error = action.error.message
        tokenService.removeUser()
      })
      .addCase(refreshToken.pending, state => {
        state.loading = true;
      })
      .addCase(refreshToken.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.token = payload.authToken;
        state.user = payload.user;
        tokenService.updateLocalAuthToken(payload.authToken)
      })
      .addCase(logInUser.pending, state => {
        state.loading = true;
      })
      .addCase(logInUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message
      })
      .addCase(logInUser.fulfilled, (state, {payload}) => {
        state.loading = false;
        if (payload.error) {
          state.error = payload.error;
          // eslint-disable-next-line no-alert
          alert(payload.error);
        } else {
          tokenService.updateLocalAuthToken(payload.authToken);
          tokenService.setUser(payload.user);
          state.token = payload.authToken;
          state.user = payload.user;
        }
      })
  },
});

export const {logout} = authSlice.actions;

export const selectAuth = (state) => state.auth;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;

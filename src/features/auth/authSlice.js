import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import authService from "./authApi";

import tokenService from "../../util/tokenServices";
import profileService from "../profile/profileApi";

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

export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async (formValues) => {
    const result = await authService.verifyEmail(formValues)
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

export const logout = createAsyncThunk(
  "auth/logout",
  async () => {
    const result = await authService.logout()
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

export const isAuthenticated = createAsyncThunk(
  "auth/isAuthenticated",
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
    setAuthToken: (state) => {
      state.token = tokenService.getLocalAuthToken()
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout.rejected, (state, action) => {
        state.error = action.error.message
      })
      .addCase(logout.fulfilled, (state) => {
        tokenService.removeUser()
        state.token = null;
        state.loading = false;
        state.user = null;
      })
      .addCase(verifyEmail.fulfilled, (state, {payload}) => {
        // localStorage.setItem("tempAuthToken", payload.authToken);
        tokenService.updateLocalAuthToken(payload.authToken)
        state.user = payload.user;
      })
      // .addCase(registerUser.fulfilled, (state, {payload}) => {
      //   state.loading = false;
      //   state.token = payload.authToken;
      //   state.user = payload.data;
      //   tokenService.updateTokens(payload.authToken, payload.refreshToken)
      // })
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
      .addCase(isAuthenticated.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.error = action.error.message
        tokenService.removeUser()
      })
      .addCase(isAuthenticated.pending, state => {
        state.loading = true;
      })
      .addCase(isAuthenticated.fulfilled, (state, {payload}) => {
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
  }
});

export const {setAuthToken} = authSlice.actions;

export const selectAuth = (state) => state.auth;
// export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;

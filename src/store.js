import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"
import { reducer as formReducer } from "redux-form"

import authReducer from "./features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

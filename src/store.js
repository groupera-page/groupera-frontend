import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"
import { reducer as formReducer } from "redux-form"

import authReducer from "./features/auth/authSlice";
import alertReducer from "./features/alert/alertSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alerts: alertReducer,
    form: formReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

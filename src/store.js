import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"
import { reducer as formReducer } from "redux-form"

import authReducer from "./features/auth/authSlice";
import alertReducer from "./features/alert/alertSlice";
import mockDataSlice from "./mockDataSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alerts: alertReducer,
    form: formReducer,
    mockData: mockDataSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

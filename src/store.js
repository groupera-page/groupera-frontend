import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { reducer as formReducer } from "redux-form";
// import authReducer from "./features/auth/authSlice";
import mockDataSlice from "./mockDataSlice";

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    form: formReducer,
    mockData: mockDataSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

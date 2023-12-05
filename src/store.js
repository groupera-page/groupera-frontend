import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"
import { reducer as formReducer } from "redux-form"

import authReducer, {registerUser} from "./features/auth/authSlice";
import alertReducer from "./features/alert/alertSlice";
import mockDataSlice from "./mockDataSlice";
import tokenService from "./util/tokenServices";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alerts: alertReducer,
    form: formReducer,
    // form: formReducer.plugin({
    //   authForm: (state, action) => {
    //     switch (action.type) {
    //       case "auth/register/fulfilled":
    //         return {
    //           ...state,
    //           values: {
    //             ...state.values,
    //             password: undefined, // <----- clear password value
    //             password_confirmation: undefined, // <----- clear password value
    //           },
    //           registeredFields: {
    //             ...state.registeredFields,
    //             password: undefined, // <----- clear field state, too (touched, etc.)
    //             password_confirmation: undefined, // <----- clear password value
    //           }
    //         }
    //       default:
    //         return state
    //     }
    //   }
    // }),
    mockData: mockDataSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
});

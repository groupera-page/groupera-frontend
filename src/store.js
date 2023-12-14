import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"
import { reducer as formReducer } from "redux-form"

import authReducer from "./features/auth/authSlice";
import groupsReducer from "./features/groups/groupSlice";
import alertReducer from "./features/alert/alertSlice";
import mockDataSlice from "./mockDataSlice";

let middlewares = []

console.log(process.env.NODE_ENV)

if (['development', 'staging'].includes(process.env.NODE_ENV)) {
  middlewares = [logger]
}

export const store = configureStore({
  reducer: {
    auth: authReducer,
    groups: groupsReducer,
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
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(...middlewares),
});

import { configureStore, createSlice } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { reducer as formReducer } from "redux-form";
// import authReducer from "./features/auth/authSlice";

const mockData = {
  groups: [
    {
      name: "Depression",
      nextEventTime: "2023-11-15T18:00:00",
    },
    {
      name: "Angst",
      nextEventTime: "2023-11-20T15:30:00",
    },
  ],
};

const dataSliceMockData = createSlice({
  name: "data",
  initialState: {
    mockData,
  },
  reducers: {},
});

const { reducer: reducerMockData } = dataSliceMockData;

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    form: formReducer,
    mockData: reducerMockData,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

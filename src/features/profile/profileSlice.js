import {createAsyncThunk} from "@reduxjs/toolkit";

import profileService from "./profileApi";


export const updateProfile = createAsyncThunk(
  "user/editQuestions",
  async (formValues) => {
    const result = await profileService.update(formValues)
    return result.data
  },
);

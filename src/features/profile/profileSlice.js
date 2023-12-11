import {createAsyncThunk} from "@reduxjs/toolkit";

import profileService from "./profileApi";

export const findProfile = createAsyncThunk(
  "profile/find",
  async () => {
    const result = await profileService.find()
    return result.data
  },
);

export const updateProfile = createAsyncThunk(
  "profile/update",
  async (formValues) => {
    const result = await profileService.update(formValues)
    if (result.status === 200) {
      return formValues
    }
    // debugger
    return result.data
  },
);

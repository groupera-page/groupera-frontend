import { createSlice } from "@reduxjs/toolkit";

const mockData = {
  groups: [
    {
      name: "The Depression Group",
      nextEventTime: "2023-11-15T18:00:00",
      theme: "Depression",
    },
    {
      name: "The Angst Group",
      nextEventTime: "2023-11-20T15:30:00",
      theme: "Angst",
    },
  ],
};

export const mockDataSlice = createSlice({
  name: "data",
  initialState: {
    mockData,
  },
  reducers: {},
});

export default mockDataSlice.reducer;

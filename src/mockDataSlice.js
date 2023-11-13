import { createSlice } from "@reduxjs/toolkit";

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

export const mockDataSlice = createSlice({
  name: "data",
  initialState: {
    mockData,
  },
  reducers: {},
});

export default mockDataSlice.reducer;

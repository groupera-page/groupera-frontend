import { createSlice } from "@reduxjs/toolkit";

const mockData = {
  groups: [
    {
      name: "Die Depressionsgruppe",
      nextEventTime: "2023-11-15T18:00:00",
      theme: "Depression",
      description: "test",
    },
    {
      name: "Die Angstgruppe",
      nextEventTime: "2023-11-20T15:30:00",
      theme: "Angst",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    },
    {
      name: "Die andere Angstgruppe",
      nextEventTime: "2023-11-20T15:30:00",
      theme: "Angst",
      description:
        "Die Gruppenangstbewältigungsstrategie wurde von Experten entwickelt, um die Mitglieder dabei zu unterstützen, gemeinsam ihre Ängste zu überwinden und eine gesunde Gruppendynamik zu fördern.",
    },
  ],
  filters: [],
};

export const mockDataSlice = createSlice({
  name: "data",
  initialState: {
    mockData,
  },
  reducers: {
    setFilters: (state, action) => {
      state.mockData.filters = action.payload;
    },
  },
});

export const { setFilters } = mockDataSlice.actions;

export default mockDataSlice.reducer;

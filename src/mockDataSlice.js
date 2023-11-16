import { createSlice } from "@reduxjs/toolkit";

const mockData = {
  groups: [
    {
      name: "Die Depressionsgruppe",
      meeting: "2023-11-15T18:00:00",
      topic: "Depression",
      description: "test",
      id: "123",
    },
    {
      name: "Die Angstgruppe",
      meeting: "2023-11-20T15:30:00",
      topic: "Angst",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      id: "234",
    },
    {
      name: "Die andere Angstgruppe",
      meeting: "2023-11-20T15:30:00",
      topic: "Angst",
      description:
        "Die Gruppenangstbewältigungsstrategie wurde von Experten entwickelt, um die Mitglieder dabei zu unterstützen, gemeinsam ihre Ängste zu überwinden und eine gesunde Gruppendynamik zu fördern.",
      id: "456",
    },
  ],
  filters: [],
  groupSearch: [],
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
    setGroupSearch: (state, action) => {
      state.mockData.groupSearch = action.payload;
    },
  },
});

export const { setFilters } = mockDataSlice.actions;
export const { setGroupSearch } = mockDataSlice.actions;

export default mockDataSlice.reducer;

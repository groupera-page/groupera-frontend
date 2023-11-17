import { createSlice } from "@reduxjs/toolkit";

const mockData = {
  groups: [
    {
      name: "Die Depressionsgruppe",
      meeting: "2023-11-15 18:00",
      topic: "Depression",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

      id: "123",
      members: 1,
    },
    {
      name: "Die Angstgruppe",
      meeting: "2023-11-20 15:30",
      topic: "Angststörung",
      description:
        "Angst angst angst angst angst angst angst angst angst angst angst angst angst angst angst angst angst angst angst",
      id: "234",
      members: 4,
    },
    {
      name: "Die andere Angstgruppe",
      meeting: "2023-11-20T15:30:00",
      topic: "Angststörung",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      id: "456",
      members: 4372,
    },
  ],
  users: [
    {
      alias: "Fritz123",
      email: "fritz@example.com",
      passwordHash: "P@ssw0rd123",
      dob: "1990-01-15",
      questions: {
        question1: "Answer1",
        question2: "Answer2",
      },

      emailVerified: false,
      authCode: "AuthenticationCode123",
      gender: "Männlich",
      paid: false,
      terms: {
        agreed: false,
        date_agreed: null,
      },
      moderatedGroups: ["group1", "group2"],
      joinedGroups: ["group3", "group4"],
      meetings: ["meeting1", "meeting2"],
      paymentSubscription: {
        plan: "basic",
        status: "active",
      },
      refreshToken: "RefreshToken123",
    },
    {
      alias: "Alice88",
      email: "alice@example.com",
      passwordHash: "SecureP@ss123",
      dob: "1988-05-20",
      questions: {
        question1: "AnswerA",
        question2: "AnswerB",
      },

      emailVerified: true,
      authCode: "AuthenticationCode456",
      gender: "Weiblich",
      paid: true,
      terms: {
        agreed: true,
        date_agreed: "2023-01-01",
      },
      moderatedGroups: ["group3", "group5"],
      joinedGroups: ["group1", "group6"],
      meetings: ["meeting3", "meeting4"],
      paymentSubscription: {
        plan: "premium",
        status: "active",
      },
      refreshToken: "RefreshToken789",
    },
  ],
  topics: [
    "Depression",
    "Sucht",
    "Angststörung",
    "Stress & Burnout",
    "Trauer",
    "chronische Erkrankungen",
    "Essstörung",
    "Angehörige",
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

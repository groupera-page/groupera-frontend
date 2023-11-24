import { createSlice } from "@reduxjs/toolkit";

const mockData = {
  groups: [
    {
      name: "Die Depressionsgruppe",
      meeting: "",
      topic: "Depression",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",

      id: "123",
      members: 1,
      image:
        "Grouptitel%20pictures%20low_res/pexels-johannes-plenio-1690355_bj811s_e6dajb.jpg",
      users: ["Marie", "Jan"],
    },
    {
      name: "Die Angstgruppe",
      meeting: "",
      topic: "Angststörung",
      description:
        "Angst angst angst angst angst angst angst angst angst angst angst angst angst angst angst angst angst angst angst",
      id: "234",
      members: 4,
      image:
        "Grouptitel%20pictures%20low_res/pexels-taylor-hunt-2902440_xvgnuq_nueptp.jpg",
      users: ["Marie", "Jan", "Rida", "Marie"],
    },
    {
      name: "Die andere Angstgruppeas",
      meeting: "",
      topic: "Angststörung",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      id: "456",
      members: 4372,
      image:
        "Grouptitel%20pictures%20low_res/pexels-taylor-hunt-2902440_xvgnuq_nueptp.jpg",
      users: [
        "Marie",
        "Jan",
        "Rida",
        "Marie",
        "Jan",
        "Rida",
        "Marie",
        "Jan",
        "Rida",
      ],
    },
  ],
  NoGroupCard: [
    {
      name: "Starte eine neue Gruppe",
      meeting: "Nach deinen zeitlichen Vorlieben",
      topic: "",
      description:
        "Aktuell gibt es für dieses wichtige Thema keine Gruppe. Sei der erste und verbinde Menschen. Du musst kein Experte sein. Wir helfen dir bei der Moderation",
      id: "",
      members: 0,
      image:
        "Grouptitel%20pictures%20low_res/pexels-johannes-plenio-1690355_bj811s_e6dajb.jpg",
      users: [""],
    },
  ],
  user: [
    {
      alias: "Username",
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
      moderatedGroups: ["123"],
      joinedGroups: ["234"],
      meetings: ["meeting3", "meeting4"],
      paymentSubscription: {
        plan: "premium",
        status: "active",
      },
      refreshToken: "RefreshToken789",
    },
    {
      alias: "Username2",
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
      moderatedGroups: [""],
      joinedGroups: [""],
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

  filters: [""],
  groupSearch: [""],
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

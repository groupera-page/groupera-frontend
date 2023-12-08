import { createSlice } from "@reduxjs/toolkit";

const mockData = {
  groups: [
    {
      name: "Depression für Frauen",
      meeting: "",
      topic: "Depression",
      description:
        "Stärke durch Teilen. Verbindung, Selbstliebe, Heilung. Zusammen gegen Depressionen. ",

      id: "123",
      members: 1,
      image:
        "Grouptitel%20pictures%20low_res/pexels-johannes-plenio-1690355_bj811s_e6dajb.jpg",
      users: ["Marie", "Jan"],
      moderatorId: "999",
    },

    {
      name: "Depression und Burnout im Beruf",
      meeting: "",
      topic: "Stress & Burnout",
      description:
        "Gemeinsam gegen Depressionen. Offene Unterstützung. Erfahrungen teilen. Heilung finden. Zusammen stark. ",
      id: "234",
      members: 4,
      image:
        "Grouptitel%20pictures%20low_res/pexels-taylor-hunt-2902440_xvgnuq_nueptp.jpg",
      users: ["Marie", "Jan", "Rida", "Marie"],
      moderatorId: "666",
    },
    {
      name: "Depression für junge Menschen bis 25",
      meeting: "",
      topic: "Depression",
      description:
        "Unter 25. Offener Raum für Verständnis, Wachstum und Heilung. Gemeinschaft, Hoffnung, gemeinsame Bewältigung. ",
      id: "456",
      members: 72,
      image:
        "Grouptitel%20pictures%20low_res/pexels-nandhu-kumar-1661296_ttr2gf_ijeg4r.jpg",
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
      moderatorId: "777",
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
      id: "999",
      alias: "John",
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
      id: "777",
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
    "Chronische Erkrankungen",
    "Essstörung",
    "Angehörige",
    "Sonstige",
  ],

  filters: [""],
  groupSearch: [""],
  imageData: [
    "Grouptitel%20pictures%20low_res/pexels-johannes-plenio-1690355_bj811s_e6dajb.jpg",
    "Grouptitel%20pictures%20low_res/pexels-taylor-hunt-2902440_xvgnuq_nueptp.jpg",
    "Grouptitel%20pictures%20low_res/pexels-pixabay-416117_hz1ccg_f4bssx.jpg",
    "Grouptitel%20pictures%20low_res/pexels-eberhard-grossgasteiger-6_abiqd5_r1jcey.jpg",
    "Grouptitel%20pictures%20low_res/pexels-akil-mazumder-1072824_1_hqufud_pjiaof.jpg",
    "Grouptitel%20pictures%20low_res/pexels-javier-gonzalez-108303_iwxfil_t8mk04.jpg",
    "Grouptitel%20pictures%20low_res/pexels-pixabay-273886_dygqro_wt5ega.jpg",
    "Grouptitel%20pictures%20low_res/pexels-nandhu-kumar-1661296_ttr2gf_ijeg4r.jpg",
  ],
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

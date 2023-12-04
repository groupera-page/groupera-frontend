import deafaultTimeSlot from "./defaultTimeSlot";

const storedUserData = JSON.parse(localStorage.getItem("userData"));
const storedGroupData = JSON.parse(localStorage.getItem("groupData"));

const userData = {
  username: "",
  email: "",
  password: "",
  passwordCheck: "",
  code: [],
  gender: "Weiblich",
  isAccepted: "",
  experience: "no experience",
  age: "",
  birthDate: "",
  isMinor: true,
  moderator: "One",
  errorUserName: "",
  errorUserEmail: "",
  errorUserPass: "",
  errorUserPassCheck: "",
};

const groupData = {
  theme: "Sonstige",
  name: "",
  description: "",
  users: [],
  img: "Grouptitel%20pictures/pexels-akil-mazumder-1072824_1_tdw8si.jpg",
  time: deafaultTimeSlot,
  freq: "Einmalig",
  when: "",
  day: new Date(),
  length: "1:00",
  token: "",
  moderator: "Ja",
  preventNext: false,
  errorGroupName: "",
  errorGroupDescription: "",
};

export const userDataInit = storedUserData ? storedUserData : userData;
export const groupDataInit = storedGroupData ? storedGroupData : groupData;

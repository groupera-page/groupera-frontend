import timeSlot from "../../util/defaultTimeSlot";

const storedUserData = JSON.parse(localStorage.getItem("userData"));
const storedGroupData = JSON.parse(localStorage.getItem("groupData"));

const userFields = {
  username: "",
  email: "",
  password: "",
  passwordCheck: "",
  gender: "Weiblich",
  age: "",
  termsAndConditions: false,
  experience: "no experience",
}

const groupFields = {
  theme: "Andere*",
  name: "",
  description: "",
  users: [],
  img: "Grouptitel%20pictures/pexels-akil-mazumder-1072824_1_tdw8si.jpg",
  // time: timeSlot,
  // freq: "Einmalig",
  // when: "",
  // day: new Date(),
  // length: "1:00",
  token: "",
  selfModerated: "Ja",
};

export const userDataInit = storedUserData ? storedUserData : userFields;

export const groupDataInit = storedGroupData ? storedGroupData : groupFields;

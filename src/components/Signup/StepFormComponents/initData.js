const now = new Date();
// Create default time slot 2 hours ahead of now
now.setHours(now.getHours() + 2);
const startHour = now.getHours().toString().padStart(2, "0");
now.setHours(now.getHours() + 1);
const endHour = now.getHours().toString().padStart(2, "0");
const timeSlot = `${startHour}:00${endHour}:00`;
const storedUserData = JSON.parse(localStorage.getItem("userData"));
const storedGroupData = JSON.parse(localStorage.getItem("groupData"));

const userDataBlank = {
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

const groupDataBlank = {
  theme: "Andere*",
  name: "",
  description: "",
  users: [],
  img: "Grouptitel%20pictures/pexels-akil-mazumder-1072824_1_tdw8si.jpg",
  time: timeSlot,
  freq: "Einmalig",
  when: "",
  day: now,
  length: "1:00",
  token: "",
  moderator: "Ja",
  preventNext: false,
  errorGroupName: "",
  errorGroupDescription: "",
};

export const userDataInit = storedUserData ? storedUserData : userDataBlank;
export const groupDataInit = storedGroupData ? storedGroupData : groupDataBlank;

// export const userDataInit =  userDataBlank;
// export const groupDataInit =  groupDataBlank;

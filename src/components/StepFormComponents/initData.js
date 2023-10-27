const today = new Date();
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
};

const groupDataBlank = {
  theme: "Andere*",
  name: "",
  description: "",
  users: [],
  img: "",
  time: timeSlot,
  freq: "Einmalig",
  when: "",
  day: today,
  length: "1:00",
  token: "",
  moderator: "Ja",
};

export const userDataInit = storedUserData ? storedUserData : userDataBlank;

export const groupDataInit = storedGroupData ? storedGroupData : groupDataBlank;

// export const userDataInit =  userDataBlank;

// export const groupDataInit =  groupDataBlank;

import axios from "axios";

export const createGroup = async (groupData, userData, setErrorMessage) => {
  const requestGroupBody = {
    name: groupData.name,
    description: groupData.description,
    time: groupData.time.slice(0, 5),
    length: groupData.length,
    img: groupData.img,
    date: new Date(groupData.day).toISOString().slice(0, 10),
    frequency: groupData.freq,
  };
  try {
    console.log("USER EMAIL", userData.email);
    const url = `http://localhost:5005/group/create/${userData.email}`;
    await axios.post(url, requestGroupBody);
    console.log(groupData);
    console.log("CREATING GROUP backend");
  } catch (error) {
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500
    ) {
      setErrorMessage(error.response.data.message);
    }
  }
};

export const validateGroupForm = (groupData, updateGroupFields) => {
  if (groupData.name.length < 3) {
    updateGroupFields({
      errorGroupName: "Bitte geben Sie Ihren Gruppenname an.",
    });
    return false;
  }

  if (groupData.description.length < 3) {
    updateGroupFields({
      errorGroupDescription: "Bitte geben Sie mindestens drei Zeichen ein",
    });
    return false;
  }

  return true;
};

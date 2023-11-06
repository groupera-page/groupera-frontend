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
    const url = `http://localhost:5005/group/create/${userData.email}`;
    await axios.post(url, requestGroupBody);
    console.log(groupData);
    console.log("CREATING GROUP");
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

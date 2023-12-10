import api from "../../api/axios";

const find = () => {
  return api
    .get("/profile", {
      withCredentials: true
    })
};


const update = (body) => {
  return api
    .patch("/profile", body, {
      withCredentials: true
    })
};

const updateEmail = (body) => {
  return api
    .patch("/profile/updateEmail", body, {
      withCredentials: true
    })
};

const updatePassword = (body) => {
  return api
    .patch("/profile/updatePassword", body, {
      withCredentials: true
    })
};

const destroy = () => {
  return api
    .delete("/profile", {
      withCredentials: true
    })
};

const profileService = {
  find,
  update,
  updateEmail,
  updatePassword,
  destroy
};

export default profileService;

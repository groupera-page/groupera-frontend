import api from "../../api/axios";

const createOne = (formValues) => {
  return api
    .post("/group", formValues, {
      withCredentials: true
    })
};

const findOne = (groupId) => {
  return api
    .get(`/group/${groupId}`, {
      withCredentials: true
    })
};

const findAll = () => {
  return api
    .get(`/group`, {
      withCredentials: true
    })
};

const updateOne = (groupId, body) => {
  return api
    .patch(`/group/${groupId}`, body, {
      withCredentials: true
    })
};

const destroy = (groupId) => {
  return api
    .delete(`/group/${groupId}`, {
      withCredentials: true
    })
};


const groupService = {
  createOne,
  findOne,
  findAll,
  updateOne,
  destroy,
};

export default groupService;

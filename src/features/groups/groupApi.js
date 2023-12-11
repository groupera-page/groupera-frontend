import api from "../../api/axios";
import createUrl from "../../util/createQueryUrl";

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

const findAll = (queryParams) => {
  const {search} = createUrl("/group", queryParams)
  return api
    .get(`/group${search}`, {
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

const join = (groupId) => {
  return api
    .put(`/groupMembership/${groupId}/join`, {
      withCredentials: true
    })
};

const leave = (groupId) => {
  return api
    .put(`/groupMembership/${groupId}/leave`, {
      withCredentials: true
    })
};


const groupService = {
  createOne,
  findOne,
  findAll,
  updateOne,
  destroy,
  join,
  leave
};

export default groupService;

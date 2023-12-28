import api from "../../api/axios";
import createUrl from "../../util/createQueryUrl";

const findAll = (queryParams) => {
  const {search} = createUrl("/user", queryParams)
  return api
    .get(`/user${search}`, {
      withCredentials: true
    })
};

const userService = {
  findAll,
};

export default userService;

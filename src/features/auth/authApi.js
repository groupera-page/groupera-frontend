import api, {noRefreshRequest} from "../../api/axios";

const login = (email, password) => {
  return noRefreshRequest
    .post("/auth/login", {
      email,
      password
    }, {
      withCredentials: true
    })
};

const logout = () => {
  return noRefreshRequest
    .get("/auth/logout", {
      withCredentials: true
    })
};


const register = (formValues) => {
  return noRefreshRequest
    .post("/auth/signup", formValues)
};

const verifyEmail = (body) => {
  return noRefreshRequest
    .patch(`/auth/verifyEmail`, body, {
      withCredentials: true
    })
};


// const acceptInvite = (token, nickName, fullName, password) => {
//   return api
//     .patch(`/auth/acceptInvite/${token}`, {
//       nickName,
//       fullName,
//       password
//     })
// };
//
// const checkAcceptInviteToken = (token) => {
//   return api
//     .get(`/auth/acceptInvite/${token}`)
// };
//
// const checkUpdatePasswordToken = (token) => {
//   return api
//     .get(`/auth/updatePassword/${token}`)
// };

const refreshToken = () => {
  return api
    .get("/auth/refresh", {
      withCredentials: true
    })
};

const getResetPasswordInstr = (email) => {
  return noRefreshRequest
    .post("/auth/resetPassword", {
      email
    })
};

// const updatePassword = (token, password) => {
//   return api
//     .patch(`/auth/updatePassword/${token}`, {
//       password
//     })
// };

const getCurrentUser = () => JSON.parse(localStorage.getItem("user"));

const authService = {
  login,
  logout,
  register,
  verifyEmail,
  refreshToken,
  getCurrentUser,
  getResetPasswordInstr,
  // updatePassword,
  // acceptInvite,
  // checkUpdatePasswordToken,
  // checkAcceptInviteToken
};

export default authService;

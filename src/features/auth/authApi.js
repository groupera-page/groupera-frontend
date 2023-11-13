import api from "../../api/axios";

const login = (email, password) => {
  return api
    .post("/auth/login", {
      email,
      password
    })
};

const register = (email, password, fullName) => {
  return api
    .post("/auth/register", {
      email,
      password,
      fullName
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

const refreshToken = (refreshToken) => {
  return api
    .post("/auth/refreshToken", {
      refreshToken
    })
};

const getResetPasswordInstr = (email) => {
  return api
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
  register,
  refreshToken,
  getCurrentUser,
  getResetPasswordInstr,
  // updatePassword,
  // acceptInvite,
  // checkUpdatePasswordToken,
  // checkAcceptInviteToken
};

export default authService;

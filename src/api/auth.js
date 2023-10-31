import basicInstance from "./axios";

const authBaseURL = "/auth"
export const AuthAPI = {
  signup: async (reqBody) => {
    const response = await basicInstance.request({
      url: `${authBaseURL}/signup`,
      method: "POST",
      body: reqBody
    })

    return response.data
  },
  authEmail: async (reqBody) => {
    const response = await basicInstance.request({
      url: `${authBaseURL}/authEmail`,
      method: "POST",
      body: reqBody
    })

    return response.data
  },
  login: async (reqBody) => {
    const response = await basicInstance.request({
      url: `${authBaseURL}/login`,
      method: "POST",
      body: reqBody
    })

    return response.data
  },
  refreshToken: async (refreshToken) => {
    const response = await basicInstance.request({
      url: `${authBaseURL}/refreshToken`,
      method: "POST",
      body: {
        refreshToken
      }
    })

    return response.data
  }
  // logout: async () => {
  //
  // }
}

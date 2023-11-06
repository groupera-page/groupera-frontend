import basicInstance from "./axios";

const authBaseURL = "/auth"

// the urls and endpoints are probably not correct!!!

export const AuthAPI = {
  signup: async (reqBody) => {
    console.log("signUp reqBody", reqBody)
    debugger
    const response = await basicInstance.post(`${authBaseURL}/signup`, reqBody)

    return response.data
  },
  authEmail: async (reqBody) => {
    const response = await basicInstance.post(`${authBaseURL}/authEmail`, reqBody)

    return response.data
  },
  login: async (reqBody) => {
    const response = await basicInstance.post(`${authBaseURL}/login`, reqBody)

    return response.data
  },
  refreshToken: async (refreshToken) => {
    const response = await basicInstance.post(`${authBaseURL}/refreshToken`, {refreshToken})

    return response.data
  }
  // logout: async () => {
  //
  // }
}

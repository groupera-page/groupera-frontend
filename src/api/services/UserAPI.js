import basicInstance from "../axios";

export const UserAPI = {
  findOne: async (reqBody) => {
    const response = await basicInstance.request({
      url: `/auth/signup`,
      method: "GET",
      body: reqBody
    })

    return response.data
  },
  updateOne: async (reqBody) => {
    const response = await basicInstance.request({
      url: "/auth/login",
      method: "GET",
      body: reqBody
    })

    return response.data.results
  },
  deleteOne: async (reqBody) => {
    const response = await basicInstance.request({
      url: "/auth/login",
      method: "GET",
      body: reqBody
    })

    return response.data.results
  },
}
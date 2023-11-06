import basicInstance from "../axios";

// the urls and endpoints are probably not correct!!!

export const UserAPI = {
  findOne: async (userId) => {
    const response = await basicInstance.get(`/users/${userId}`)

    return response.data
  },
  updateOne: async (userId, reqBody) => {
    const response = await basicInstance.patch(`/users/${userId}`, reqBody)

    return response.data.results
  },
  deleteOne: async (userId) => {
    const response = await basicInstance.delete(`/users/${userId}`)

    return response.data
  },
}
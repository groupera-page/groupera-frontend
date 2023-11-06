import axios from "axios";
import tokenService from "../util/tokenServices";

const basicInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    "content-type": "application/json",
  },
  responseType: "json"
});

const setupInterceptors = axiosInstance => {
  axiosInstance.interceptors.request.use(
    async config => {
      const token = await tokenService.getLocalAccessToken();
      if (token) {
        config.headers["Authorization"] = "Bearer " + token;  // for Spring Boot back-end
        config.headers["x-access-token"] = token; // for Node.js Express back-end
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(undefined, (error) => {
    const statusCode = error.response?.status

    // logging only errors that are not 401
    if (statusCode && statusCode !== 401) {
      console.error(error)
    }

    return Promise.reject(error)
  })
};

setupInterceptors(basicInstance)

export default basicInstance

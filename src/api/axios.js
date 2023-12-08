import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json"
});

export const noRefreshRequest = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json"
});

export default instance;

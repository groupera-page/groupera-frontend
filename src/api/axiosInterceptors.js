import api, {noRefreshRequest} from "./axios";
import tokenService from "../util/tokenServices";
import {logout, refreshToken} from "../features/auth/authSlice";

const setupInterceptors = store => {
  api.interceptors.request.use(
    config => {
      const token = tokenService.getLocalAuthToken();
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

  noRefreshRequest.interceptors.request.use(
    config => {
      const token = tokenService.getLocalAuthToken();
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

  const {dispatch} = store;
  api.interceptors.response.use(
    res => {
      return res;
    },
    async err => {
      const originalConfig = err.config;
      if (originalConfig.url !== "/auth/login" && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            console.log("refresh Token!", originalConfig.url)
            await dispatch(refreshToken());

            return api(originalConfig);
          } catch (_error) {
            dispatch(logout());
            return Promise.reject(_error);
          }
        }
      }

      return Promise.reject(err.response.data.error);
    },
  );
};

export default setupInterceptors;

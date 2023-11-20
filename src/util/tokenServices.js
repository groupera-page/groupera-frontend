const getLocalRefreshToken = () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (refreshToken) return refreshToken;
  return undefined;
};

const getLocalAuthToken = () => {
  const authToken = localStorage.getItem("authToken");

  if (authToken) {
    return authToken;
  }
  return undefined;
};

const updateLocalAuthToken = token => {
  const authToken = localStorage.getItem("authToken");
  if (authToken !== null) {
    localStorage.setItem("authToken", token);
  }
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const updateTokens = (authToken, refreshToken) => {
  if (authToken) {
    localStorage.setItem("authToken", authToken);
  }
  if (refreshToken) {
    localStorage.setItem("refreshToken", refreshToken);
  }
}

const setUser = user => {
  localStorage.setItem("user", JSON.stringify(user));
};

const removeUser = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("authToken");
  localStorage.removeItem("refreshToken");
};

const tokenService = {
  updateTokens,
  getLocalRefreshToken,
  getLocalAuthToken,
  updateLocalAuthToken,
  getUser,
  setUser,
  removeUser,
};

export default tokenService;

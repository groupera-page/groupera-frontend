const getLocalRefreshToken = () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (refreshToken) return refreshToken;
  return undefined;
};

const getLocalAccessToken = () => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    return accessToken;
  }
  return undefined;
};

const updateLocalAccessToken = token => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken !== null) {
    localStorage.setItem("accessToken", token);
  }
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const updateTokens = (accessToken, refreshToken) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
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
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

const tokenService = {
  updateTokens,
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
  getUser,
  setUser,
  removeUser,
};

export default tokenService;

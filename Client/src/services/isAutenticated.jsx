
    const getCurrentUser = () => {
        return (localStorage.getItem("token"));
      };


export const TOKEN_KEY = getCurrentUser();

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;


export const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return token;
};

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};


const USER = 'user';
const TOKEN = 'token';

export const login = () => {
  localStorage.setItem(USER, 'TestLogin');
};

export const logout = () => {
  localStorage.removeItem(USER);
};

export const isLoggedIn = () => {
  if (localStorage.getItem(TOKEN)) {
    return true;
  }

  return false;
};

export const getToken = () => {
  return localStorage.getItem(TOKEN);
};

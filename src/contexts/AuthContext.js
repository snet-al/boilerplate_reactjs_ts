import { createContext, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import axios from '../utils/axios';

import { saveUser, updateUser, deleteUser } from '../redux/slices/auth';

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

const AuthContext = createContext({
  ...initialState,
  login: () => Promise.resolve(),
  updateUser: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [isInitialized, setIsInitialized] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const isAuthenticated = useMemo(() => Boolean(user), [user]);

  const updateUserData = async () => {
    const response = await axios.get('/auth/user');

    dispatch(updateUser({ user: response.data }));
  };

  useEffect(() => {
    setIsInitialized(true);
    if (isAuthenticated) {
      updateUserData();
    }
  }, []);

  const login = async (email, password, rememberMe) => {
    const response = await axios.post('/auth/login', {
      email,
      password,
      rememberMe,
    });

    dispatch(saveUser(response.data));
  };

  const logout = async () => {
    await axios.get('/auth/logout');
    dispatch(deleteUser());
  };

  return (
    <AuthContext.Provider
      value={{
        ...initialState,
        user,
        isAuthenticated,
        isInitialized,
        login,
        updateUser: updateUserData,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };

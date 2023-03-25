import axios from 'axios';

import { deleteUser, updateToken } from '../redux/slices/auth';
import { store } from '../redux/store';

const baseURL =
  process.env.REACT_APP_STATUS === 'production'
    ? `https://${process.env.REACT_APP_URL}`
    : `http://localhost:${process.env.REACT_APP_BACKEND_PORT}`;

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { accessToken } = store.getState().auth;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    switch (error.response.status) {
      case 401:
        try {
          const { uuid, refreshToken } = store.getState().auth.user;

          const { data } = await axios.post(`${baseURL}/auth/refresh-token`, { uuid, refreshToken });

          store.dispatch(updateToken({ accessToken: data.accessToken }));

          const { config } = error;

          return await axiosInstance.request(config);
        } catch {
          store.dispatch(deleteUser());
        }
        break;
      default:
        return Promise.reject(error);
    }
  }
);

export default axiosInstance;

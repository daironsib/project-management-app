import axios from 'axios';

const baseURL = 'https://final-task-backend-production-c179.up.railway.app';

export const axiosPrivate = axios.create({
  baseURL,
});

axiosPrivate.interceptors.request.use(async (config) => {
  const token = await localStorage.getItem('token');
  config.headers = {
    ...config.headers,
    authorization: `Bearer ${token}`,
  };
  return config;
});

export const axiosPublic = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

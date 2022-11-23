import axios from 'axios';

const baseURL = 'https://final-task-backend-production-c179.up.railway.app';
const token = localStorage.getItem('token');

export const axiosPrivate = axios.create({
  baseURL,
  headers: { authorization: `Bearer ${token}` },
});

export const axiosPublic = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

import axios from 'axios';

const baseURL = 'https://final-task-backend-production-c179.up.railway.app';
const token = localStorage.getItem('token');

export const axiosPrivate = axios.create({
  baseURL,
  headers: { 'X-Custom-Header': 'foobar', authorization: `Bearer ${token}` },
});

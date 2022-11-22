import axios from 'axios';
import { IBoard } from '../../types/interfaces';

const baseUrl = 'https://final-task-backend-production-c179.up.railway.app';

export const createBoard = async (data: IBoard) => {
  return await axios({
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    url: `${baseUrl}/boards`,
    data: {
      ...data,
      users: [],
    },
  });
};

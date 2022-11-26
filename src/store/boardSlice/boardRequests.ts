import axios from 'axios';
import { IBoard, IEditBoard } from '../../types/interfaces';
import { parseJWT } from '../../utils/utils';

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

export const getBoardsByUserId = async (userId: string) => {
  return await axios({
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    url: `${baseUrl}/boardsSet/${userId}`,
  });
};

export const editBoard = async (data: IEditBoard) => {
  return await axios({
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    url: `${baseUrl}/boards/${data.boardId}`,
    data: {
      title: data.title,
      owner: data.owner,
      users: [],
    },
  });
};

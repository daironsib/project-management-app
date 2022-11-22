import { IBoard } from '../../types/interfaces';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { createBoard } from './boardRequests';

export const initialState = {
  errorMessage: '',
  error: false,
};

export const creationOfBoard = createAsyncThunk(
  'board/create',
  async (data: IBoard, { rejectWithValue }) => {
    try {
      const response = await createBoard(data);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(creationOfBoard.pending, (state) => {});
    builder.addCase(creationOfBoard.fulfilled, (state) => {
      state.errorMessage = '';
      state.error = false;
    });
    builder.addCase(creationOfBoard.rejected, (state, action) => {
      state.errorMessage = (action.payload as Error).message || '';
      state.error = true;
    });
  },
});

export const boardReducer = boardSlice.reducer;

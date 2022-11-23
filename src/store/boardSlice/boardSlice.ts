import { IBoard } from '../../types/interfaces';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { createBoard } from './boardRequests';

export const initialState = {
  errorMessage: '',
  error: false,
  loading: false,
  isCreateModalOpened: false,
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
  reducers: {
    changeIsCreateModalOpened: (state, action) => {
      state.isCreateModalOpened = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(creationOfBoard.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(creationOfBoard.fulfilled, (state) => {
      state.error = false;
      state.loading = false;
      state.isCreateModalOpened = false;
    });
    builder.addCase(creationOfBoard.rejected, (state, action) => {
      state.errorMessage = (action.payload as Error).message || '';
      state.error = true;
      state.loading = false;
    });
  },
});

export const boardReducer = boardSlice.reducer;
export const { changeIsCreateModalOpened } = boardSlice.actions;

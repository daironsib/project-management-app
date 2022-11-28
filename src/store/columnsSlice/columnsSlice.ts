import { IBoard, IBoardGot } from '../../types/interfaces';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
// import { createBoard, getBoardsByUserId } from './boardRequests';

export const initialState = {
  columns: [] as IBoardGot[],
};

// export const creationOfBoard = createAsyncThunk(
//   'board/create',
//   async (data: IBoard, { rejectWithValue }) => {
//     try {
//       const response = await createBoard(data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue((error as AxiosError).response?.data);
//     }
//   }
// );

// export const getBoards = createAsyncThunk(
//   'boards/get',
//   async (userId: string, { rejectWithValue }) => {
//     try {
//       const response = await getBoardsByUserId(userId);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue((error as AxiosError).response?.data);
//     }
//   }
// );

export const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    // changeIsCreateModalOpened: (state, action) => {
    //   state.isCreateModalOpened = action.payload;
    // },
  },
  extraReducers: (builder) => {
    // builder.addCase(creationOfBoard.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(creationOfBoard.fulfilled, (state) => {
    //   state.error = false;
    //   state.loading = false;
    //   state.isCreateModalOpened = false;
    //   state.shouldLoadBoards = true;
    // });
    // builder.addCase(creationOfBoard.rejected, (state, action) => {
    //   state.errorMessage = (action.payload as Error).message || '';
    //   state.error = true;
    //   state.loading = false;
    // });
    // builder.addCase(getBoards.pending, (state) => {
    //   state.loadingBoards = true;
    // });
    // builder.addCase(getBoards.fulfilled, (state, action) => {
    //   state.errorBoards = false;
    //   state.loadingBoards = false;
    //   state.boards = action.payload;
    //   state.shouldLoadBoards = false;
    // });
    // builder.addCase(getBoards.rejected, (state, action) => {
    //   state.errorBoardsMessage = (action.payload as Error).message || '';
    //   state.errorBoards = true;
    //   state.loadingBoards = false;
    //   state.shouldLoadBoards = false;
    // });
  },
});

export const columnsReducer = columnsSlice.reducer;
// export const { changeIsCreateModalOpened } = boardSlice.actions;

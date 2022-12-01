import { createSlice } from '@reduxjs/toolkit';
import { addTask, getTasks } from './tasksActions';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    errorMessage: '',
    error: false,
    loading: false,
    loadingTasks: false,
    errorTasks: false,
    shouldLoadTasks: true,
    isTaskModalOpen: false,
  },
  reducers: {
    toogleTaskModal: (state, action) => {
      state.isTaskModalOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTask.fulfilled, (state) => {
      state.error = false;
      state.loading = false;
      state.isTaskModalOpen = false;
      state.shouldLoadTasks = true;
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.errorMessage = (action.payload as Error).message || '';
      state.error = true;
      state.loading = false;
    });
    builder.addCase(getTasks.pending, (state) => {
      state.loadingTasks = true;
    });
    builder.addCase(getTasks.fulfilled, (state, action) => {
      state.errorTasks = false;
      state.loadingTasks = false;
      state.tasks = action.payload;
      state.shouldLoadTasks = false;
    });
    builder.addCase(getTasks.rejected, (state) => {
      state.errorTasks = true;
      state.loadingTasks = false;
      state.shouldLoadTasks = false;
    });
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { toogleTaskModal } = tasksSlice.actions;

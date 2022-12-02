import { createSlice } from '@reduxjs/toolkit';
import { ITaskAPI } from '../../types/interfaces';
import { addTask, getTasks, updateTask } from './tasksActions';

interface ITaskState {
  tasks: ITaskAPI[];
  errorMessage: string;
  error: boolean;
  loading: boolean;
  loadingTasks: boolean;
  errorTasks: boolean;
  shouldLoadTasks: boolean;
  isTaskModalOpen: boolean;
}
export const initialState: ITaskState = {
  tasks: [],
  errorMessage: '',
  error: false,
  loading: false,
  loadingTasks: false,
  errorTasks: false,
  shouldLoadTasks: true,
  isTaskModalOpen: false,
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    toogleTaskModal: (state, action) => {
      state.isTaskModalOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
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
    builder.addCase(addTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTask.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      state.isTaskModalOpen = false;
      state.shouldLoadTasks = true;
      state.tasks.push(action.payload);
    });
    builder.addCase(addTask.rejected, (state, action) => {
      state.errorMessage = (action.payload as Error).message || '';
      state.error = true;
      state.loading = false;
    });
    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.errorTasks = false;
      state.loadingTasks = false;
      const index = state.tasks.findIndex(task => task._id === action.payload._id);
      state.tasks[index] = action.payload;
      state.shouldLoadTasks = false;
    })
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { toogleTaskModal } = tasksSlice.actions;

import { createSlice } from '@reduxjs/toolkit';
import { addColumn, getColumns } from './columnsActions';
import { IColumn } from '../../types/interfaces';

interface IColumnsState {
  columns: IColumn[];
  errorMessage: string;
  error: boolean;
  loading: boolean;
  loadingColumns: boolean;
  errorColumns: boolean;
  shouldLoadColumns: boolean;
  isColAddModalOpen: boolean;
  currentColumn: string;
}
export const initialState: IColumnsState = {
  columns: [],
  errorMessage: '',
  error: false,
  loading: false,
  loadingColumns: false,
  errorColumns: false,
  shouldLoadColumns: true,
  isColAddModalOpen: false,
  currentColumn: '',
};

export const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    resetColumns: (state) => {
      state.columns = []
    },
    setCurrentColumn: (state, action) => {
      state.currentColumn = action.payload;
    },
    toogleColumnModal: (state, action) => {
      state.isColAddModalOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addColumn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addColumn.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      state.isColAddModalOpen = false;
      state.shouldLoadColumns = true;
      state.columns.push(action.payload);
    });
    builder.addCase(addColumn.rejected, (state, action) => {
      state.errorMessage = (action.payload as Error).message || '';
      state.error = true;
      state.loading = false;
    });
    builder.addCase(getColumns.pending, (state) => {
      state.loadingColumns = true;
    });
    builder.addCase(getColumns.fulfilled, (state, action) => {
      state.errorColumns = false;
      state.loadingColumns = false;
      state.columns = action.payload;
      state.shouldLoadColumns = false;
    });
    builder.addCase(getColumns.rejected, (state, action) => {
      state.errorColumns = true;
      state.loadingColumns = false;
      state.shouldLoadColumns = false;
    });
  },
});

export const columnsReducer = columnsSlice.reducer;
export const { resetColumns, setCurrentColumn, toogleColumnModal } = columnsSlice.actions;

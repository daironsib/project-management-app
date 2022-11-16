import { ISignInForm } from './../../types/interfaces';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { ISignUpForm } from '../../types/interfaces';
import { login, registration } from './userRequests';

interface IUserState {
  isLoading: boolean;
  isAuth: boolean;
  errorMessage: string;
}
export const initialState: IUserState = {
  isLoading: false,
  isAuth: false,
  errorMessage: '',
};

export const userRegistration = createAsyncThunk(
  'auth/registration',
  async (data: ISignUpForm, { rejectWithValue }) => {
    try {
      const response = await registration(data);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async (data: ISignInForm, { rejectWithValue }) => {
    try {
      const response = await login(data);
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userRegistration.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userRegistration.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(userRegistration.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = (action.payload as Error).message || '';
    });
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state) => {
      state.isAuth = true;
      state.isLoading = false;
      state.errorMessage = '';
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = (action.payload as Error).message || '';
    });
  },
});

export const { logout } = userSlice.actions;
export const userReducer = userSlice.reducer;

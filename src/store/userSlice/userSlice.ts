import { createSlice } from '@reduxjs/toolkit';
import { userLogin, userRegistration, getUser } from './userActions';

interface IUserState {
  isLoading: boolean;
  isAuth: boolean;
  errorMessage: string;
  user: {
    id: string;
  };
}
export const initialState: IUserState = {
  isLoading: false,
  isAuth: !!localStorage.getItem('token'),
  errorMessage: '',
  user: {
    id: '',
  },
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.isAuth = false;
      localStorage.removeItem('token');
    },
    setId: (state, action) => {
      state.user.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userRegistration.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userRegistration.fulfilled, (state) => {
      state.isLoading = false;
      state.errorMessage = '';
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
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.errorMessage = '';
      console.log(action.payload);
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = (action.payload as Error).message || '';
      if (state.errorMessage === 'Invalid token') {
        state.isAuth = false;
      }
    });
  },
});

export const { logOut, setId } = userSlice.actions;
export const userReducer = userSlice.reducer;

import { userReducer } from './userSlice/userSlice';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;

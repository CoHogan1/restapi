import { configureStore } from '@reduxjs/toolkit';
//import { authReducer } from '../features/auth/authSlice'
import { authSlice } from '../features/auth/authSlice'

export const store = configureStore({
  reducer: {
      //auth: authReducer,
      auth: authSlice,
  },
});

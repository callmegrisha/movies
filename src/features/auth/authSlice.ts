import Cookies from 'js-cookie';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { User } from 'services/users/users.types.ts';

export type AuthState = {
  user: User | null;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, error } }: PayloadAction<AuthState>
    ) => {
      state.error = error || null;
      state.user = error ? null : user;
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
      const token = Cookies.get('token');
      if (token) {
        try {
          Cookies.remove('token', { expires: 7, secure: true });
        } catch (e) {
          console.error('Error whet delete cookie', e);
        }
      }
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

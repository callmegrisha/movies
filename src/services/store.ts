import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { useDispatch } from 'react-redux';
import { movieApi } from 'services/movies';
import { usersApi } from 'services/users';
import authReducer from 'features/auth/authSlice.ts';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware, usersApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

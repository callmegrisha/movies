import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createRequest } from 'utils/createRequest';
import { UserResponse, LoginRequest } from './users.types.ts';

const commonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://57c3b89a04bbfa8d.mokky.dev' }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials: Record<string, string>) =>
        createRequest('/register', 'POST', commonHeaders, credentials),
    }),
    auth: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) =>
        createRequest('/auth', 'POST', commonHeaders, credentials),
    }),
  }),
});

export const { useRegisterMutation, useAuthMutation } = usersApi;

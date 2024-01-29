import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createRequest } from 'utils/createRequest';

const commonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://57c3b89a04bbfa8d.mokky.dev' }),
  endpoints: (builder) => ({
    register: builder.query({
      query: (body: Record<string, string>) =>
        createRequest('/register', 'POST', commonHeaders, body),
    }),
    auth: builder.query({
      query: (body: Record<string, string>) =>
        createRequest('/auth', 'POST', commonHeaders, body),
    }),
  }),
});

export const { useRegisterQuery, useAuthQuery } = usersApi;

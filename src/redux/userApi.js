import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  endpoints: builder => ({
    getUserByEmail: builder.query({
      query: () => `/users/current`,
    }),
    registerUser: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({ name, email, password }) => ({
        url: '/users/signup',
        method: 'POST',
        body: {
          name,
          email,
          password,
        },
      }),
      invalidatesTags: ['user'],
    }),
    signInUser: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({ email, password }) => ({
        url: '/users/login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useGetUserByEmailQuery,
  useRegisterUserMutation,
  useSignInUserMutation,
} = userApi;

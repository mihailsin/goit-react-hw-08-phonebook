import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
    tagTypes: ['user'],
  }),
  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => `/users/current`,
      providesTags: ['user'],
    }),
    registerUser: builder.mutation({
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
    logOutUser: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['user', 'contacts'],
    }),
    getContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: 'contacts',
        method: 'POST',
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
    editContact: builder.mutation({
      query: ({ id, name, number }) => ({
        url: `contacts/${id}`,
        method: 'PATCH',
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useRegisterUserMutation,
  useSignInUserMutation,
  useLogOutUserMutation,
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useEditContactMutation,
} = userApi;

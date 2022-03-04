import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    name: null,
    token: null,
    isLoggedIn: false,
  },
  reducers: {
    add: (state, { payload }) => {
      console.log(payload);
      state.name = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
  },
});

export const { add } = authSlice.actions;

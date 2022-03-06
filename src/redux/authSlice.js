import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      console.log(payload);
      state.name = payload.user;
      state.isLoggedIn = true;
      state.token = payload.token;
    },
    unsetUser: state => {
      return (state = initialState);
    },
  },
});

export const { setUser, unsetUser } = authSlice.actions;

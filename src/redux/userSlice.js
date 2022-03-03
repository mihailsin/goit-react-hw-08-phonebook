import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    add: (state, { payload }) => {
      state.auth.user = payload.user;
      state.auth.token = payload.token;
    },
  },
});

export const { add } = userSlice.reducer;

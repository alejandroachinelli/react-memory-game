import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    }
  },
});

export const { setUserName } = authSlice.actions;
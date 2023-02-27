import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: null,
};

const URL = 'http://127.0.0.1/api/v1/users';

export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
  const response = await axios.get(URL);
  return response.data;
});

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
  },
});

export default usersSlice.reducer;

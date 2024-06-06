import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = 'https://168kgs.sevenkoncepts.com/api'

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userCredentials) => {
    const request = await axios.post(`${baseURL}/auth/local`, userCredentials);
    const response = await request.data;
    localStorage.setItem('user', JSON.stringify(response));
    localStorage.setItem('jwt', JSON.stringify(response.jwt));
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        if(action.error.message === "Invalid identifier or password") {
          state.error = action.error.message;
        }
      })
  }
});

export default userSlice.reducer
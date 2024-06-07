import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loginAPI, user_details } from "../apiroutes/apiroutes";



export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userCredentials) => {
    const request = await axios.post(loginAPI, userCredentials);
    const response = await request.data;
    localStorage.setItem('user', response);
    localStorage.setItem('jwt', response.jwt);
    return response;
  }
);

export const userDetails = createAsyncThunk(
  'user/userDetails',
  async () => {
    const token = localStorage.getItem('jwt');
    console.log(token, 'jwt token')

    const headers = {
      "Authorization": `Bearer ${token}`,
    };
    console.log(headers, 'header with jwt');
    
    try {
      const response = await axios.get(user_details, {headers});
      return response.data;
    } catch (error) {
      // Handle error
      throw error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    detailsLoading: false,
    user: null,
    userRole: null,
    userTasks: null,
    userDetailsError: null,
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
        if (action.error.message === "Invalid identifier or password") {
          state.error = action.error.message;
        }
      })
      .addCase(userDetails.pending, (state) => {
        state.detailsLoading = true;
        state.userDetailsError = null;
      })
      .addCase(userDetails.fulfilled, (state, action) => {
        state.detailsLoading = false;
        state.userRole = action.payload.user_role,
          state.userTasks = action.payload.tasks,
          state.userDetailsError = null;
      })
      .addCase(userDetails.rejected, (state, action) => {
        state.detailsLoading = false;
        console.log(action.error.message);
        if (action.error.message === "Invalid identifier or password") {
          state.userDetailsError = action.error.message;
        }
      })
  }
});

export default userSlice.reducer
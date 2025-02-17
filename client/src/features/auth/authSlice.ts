import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthState } from "types/data";
import axios from "axios";

const initialState: AuthState = {
  token: null,
  role: null,
  loading: false,
  message: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }) => {
    const response = await axios.post("http://localhost:3001/api/auth/login", {
      email,
      password,
    });
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  // `createSlice` выведет тип состояния из аргумента `initialState`
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.role = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.role = action.payload.role;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.message = "Login failed. Invalid credentials or user not found.";
      });
  },
});

export default authSlice.reducer;

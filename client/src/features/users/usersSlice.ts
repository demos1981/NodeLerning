import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserProps, UserState } from "types/userTypes";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, { getState }) => {
    const state = getState() as { auth: { token: string } };
    const response = await fetch("http://localhost:3001/api/users", {
      headers: { Authorization: state.auth.token },
    });
    if (!response.ok) {
      throw new Error("Помилка при завантаженні користувачів");
    }
    return await response.json();
  }
);

export const addUsers = createAsyncThunk(
  "users/addUsers",
  async (users: Omit<UserProps, "id">, { getState }) => {
    const state = getState() as { auth: { token: string } };
    const response = await fetch("http://localhost:3001/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: state.auth.token,
      },
      body: JSON.stringify(users),
    });
    if (!response.ok) {
      throw new Error("Помилка при додаванні користувача");
    }
    return await response.json();
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      })
      .addCase(addUsers.fulfilled, (state, action) => {
        state.users.push(action.payload);
      });
  },
});

export default usersSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authSlice";

import usersReducer from "./slices/users/usersSlice";

import adminApi from "./api/adminApi";

// ...

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([adminApi.middleware]),
});

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>;
// Выведенные типы: { usersAuth: UsersAuthState}
export type AppDispatch = typeof store.dispatch;

export default store;

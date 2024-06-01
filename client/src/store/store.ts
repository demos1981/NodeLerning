import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
// ...

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>;
// Выведенные типы: { usersAuth: UsersAuthState}
export type AppDispatch = typeof store.dispatch;

export default store;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authSlice";

import usersReducer from "./slices/users/usersSlice";
import { mediaApi } from "./api/mediaApi";
import { productApi } from "./api/productApi";
// ...

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    [productApi.reducerPath]: productApi.reducer,
    [mediaApi.reducerPath]: mediaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mediaApi.middleware, productApi.middleware),
});

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>;
// Выведенные типы: { usersAuth: UsersAuthState}
export type AppDispatch = typeof store.dispatch;

export default store;

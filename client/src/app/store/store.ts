import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth/authSlice";
import productReducer from "./slices/product/productSlice";
import usersReducer from "./slices/users/usersSlice";
import { mediaApi } from "./api/mediaApi";
// ...

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    users: usersReducer,
    [mediaApi.reducerPath]: mediaApi.reducer,
  },
});

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>;
// Выведенные типы: { usersAuth: UsersAuthState}
export type AppDispatch = typeof store.dispatch;

export default store;

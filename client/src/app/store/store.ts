import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../../features/auth/authSlice";
import productReducer from "../../features/product/productSlice";
import usersReducer from "../../features/users/usersSlice";
import mediaReducer from "../../features/media/mediaSlice";
// ...

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    users: usersReducer,
    media: mediaReducer,
  },
});

// Выведение типов `RootState` и `AppDispatch` из хранилища
export type RootState = ReturnType<typeof store.getState>;
// Выведенные типы: { usersAuth: UsersAuthState}
export type AppDispatch = typeof store.dispatch;

export default store;

import adminApi from "./adminApi";
import { AuthUser } from "types/authTypes";

export const authApi = adminApi.injectEndpoints({
  endpoints: (builder) => ({
    // Вхід
    login: builder.mutation<AuthUser, { email: string; password: string }>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    // Реєстрація
    register: builder.mutation<
      AuthUser,
      { email: string; password: string; name: string; role: string }
    >({
      query: (credentials) => ({
        url: "auth/register",
        method: "POST",
        body: credentials,
      }),
    }),

    // Оновлення токена (refresh)
    refreshToken: builder.mutation<AuthUser, { refreshToken: string }>({
      query: (body) => ({
        url: "auth/token",
        method: "POST",
        body,
      }),
    }),

    // Вихід
    logout: builder.mutation<{ message: string }, { refreshToken: string }>({
      query: (body) => ({
        url: "auth/logout",
        method: "DELETE",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useRefreshTokenMutation,
  useLogoutMutation,
} = authApi;

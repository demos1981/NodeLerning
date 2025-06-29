import adminApi from "./adminApi";
import { AuthUser } from "types/authTypes";
import { User } from "types/userTypes";

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
    // Отримання всіх користувачів
    getUsers: builder.query<{ users: User[] }, void>({
      query: () => ({
        url: "auth/users", // 👈 переконайся, що бекенд слухає на /api/users або /users
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useRefreshTokenMutation,
  useLogoutMutation,
  useGetUsersQuery,
} = authApi;

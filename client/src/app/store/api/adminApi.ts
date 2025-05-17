import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrlApi = process.env.REACT_APP_API_URL || "http://localhost:3001/";
const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrlApi}api/`,
    credentials: "include",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default adminApi;

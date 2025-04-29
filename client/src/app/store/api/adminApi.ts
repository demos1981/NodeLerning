import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrlApi = process.env.REACT_APP_API_URL;
const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrlApi}api/` }),
  endpoints: () => ({}),
});

export default adminApi;

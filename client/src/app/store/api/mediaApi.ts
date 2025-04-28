import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl = process.env.REACT_APP_API_URL;

export const mediaApi = createApi({
  reducerPath: "mediaApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiBaseUrl}api/` }), //  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Media"],

  endpoints: (builder) => ({
    uploadMedia: builder.mutation({
      query: ({ file, productId, type = "photo" }) => {
        const formData = new FormData();
        formData.append(type, file);

        return {
          url: `${productId}/${type}`,
          method: "POST",
          body: formData,
          // Важливо! Не встановлюйте Content-Type, браузер сам встановить правильний з boundary
          formData: true,
        };
      },
      invalidatesTags: ["Media"],
    }),
    getMedia: builder.query({
      query: (productId, types = "photo") => `${productId}/${types}`,
      providesTags: ["Media"],
    }),
    deleteMedia: builder.mutation({
      query: ({ productId, type }) => ({
        url: `${productId}/${type}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Media"],
    }),
  }),
});

export const {
  useUploadMediaMutation,
  useDeleteMediaMutation,
  useGetMediaQuery,
} = mediaApi;

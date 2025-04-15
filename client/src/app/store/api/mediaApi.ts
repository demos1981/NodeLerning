import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiBaseUrl = process.env.REACT_APP_API_URL;

export const mediaApi = createApi({
  reducerPath: "mediaApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiBaseUrl}/api/` }),
  tagTypes: ["Media"],

  endpoints: (builder) => ({
    // Завантаження медіа (фото або відео)
    uploadMedia: builder.mutation<
      { photoUrl?: string; videoUrl?: string },
      { file: File; productId: number }
    >({
      query: ({ file, productId }) => {
        const type = file.type.startsWith("image") ? "photo" : "video";
        const formData = new FormData();
        formData.append(type, file);

        return {
          url: `items/${productId}/${type}`,
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: ["Media"],
    }),

    // Отримання медіа для продукту
    getMedia: builder.query<
      { photoUrl?: string; videoUrl?: string },
      number // productId
    >({
      query: (productId) => `items/${productId}`, // має бути ендпоінт типу GET /items/:id
      providesTags: ["Media"],
    }),

    // Видалення медіа — можна зробити аналогічно
    deleteMedia: builder.mutation<
      void,
      { productId: number; type: "photo" | "video" }
    >({
      query: ({ productId, type }) => ({
        url: `items/${productId}/${type}`,
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

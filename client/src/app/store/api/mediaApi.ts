import adminApi from "./adminApi";

const enchancedMediaApi = adminApi.enhanceEndpoints({
  addTagTypes: ["Media"],
});

export const mediaApi = enchancedMediaApi.injectEndpoints({
  endpoints: (builder) => ({
    // Upload media (photo, video, etc.) for a product
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

    // Get media (photo, video, etc.) for a product
    getMedia: builder.query({
      query: (productId, type = "photo") => `${productId}/${type}`,
      providesTags: ["Media"],
    }),

    // Delete media (photo, video, etc.) for a product
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

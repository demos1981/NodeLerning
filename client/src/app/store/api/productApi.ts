import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductProps } from "types/productTypes";

const apiBase = process.env.REACT_APP_API_URL;

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${apiBase}api/` }),
  tagTypes: ["Product"],

  endpoints: (builder) => ({
    // GET /items
    getProducts: builder.query<ProductProps[], void>({
      query: () => "items",
      providesTags: ["Product"],
    }),

    // POST /items
    addProduct: builder.mutation<ProductProps, Omit<ProductProps, "id">>({
      query: (newProduct) => ({
        url: "items",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: newProduct,
      }),
      invalidatesTags: ["Product"],
    }),

    // DELETE /items/:id
    deleteProduct: builder.mutation<void, number>({
      query: (id) => ({
        url: `items/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

// Хуки для використання в компонентах
export const {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
} = productApi;

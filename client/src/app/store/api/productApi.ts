import { ProductProps } from "types/productTypes";
import adminApi from "./adminApi";

const enchancedProductApi = adminApi.enhanceEndpoints({
  addTagTypes: ["Product"],
});

export const productApi = enchancedProductApi.injectEndpoints({
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

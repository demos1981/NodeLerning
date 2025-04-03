import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductProps } from "types/productTypes";
import { ProductState } from "types/productTypes";

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

// Async thunks for API calls
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { getState }) => {
    // const state = getState() as { auth: { token: string } };
    const response = await fetch(
      "https://backend-six-rho-61.vercel.app/api/items"
      // {
      //   headers: { Authorization: state.auth.token },
      // }
    );
    if (!response.ok) {
      throw new Error("Помилка при завантаженні продуктів");
    }
    const data = await response.json();

    return data;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product: Omit<ProductProps, "id">, { getState }) => {
    //const state = getState() as { auth: { token: string } };
    const response = await fetch(
      "https://backend-six-rho-61.vercel.app/api/items",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //Authorization: state.auth.token,
        },
        body: JSON.stringify(product),
      }
    );
    if (!response.ok) {
      throw new Error("Помилка при додаванні продукту");
    }
    return await response.json();
  }
);
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id: number) => {
    const response = await fetch(
      `https://backend-six-rho-61.vercel.app/api/items/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Помилка при видаленні продукту");
    }
    return id;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })

      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      });
  },
});
//   },
// });

export default productSlice.reducer;

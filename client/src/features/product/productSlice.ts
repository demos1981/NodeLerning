import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductProps } from "../../types/data";
import { ProductState } from "../../types/data";
import axios from "axios";

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

// Async thunks for API calls
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { getState }) => {
    const state = getState() as { auth: { token: string } };
    const response = await axios.get("http://localhost:3001/api/products", {
      headers: { Authorization: state.auth.token },
    });
    console.log(response);
    return response.data.products;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product: Omit<ProductProps, "id">, { getState }) => {
    const state = getState() as { auth: { token: string } };
    const response = await axios.post(
      "http://localhost:3001/api/products",
      product,
      {
        headers: { Authorization: state.auth.token },
      }
    );
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id: number) => {
    await axios.delete(`http://localhost:3001/api/products/${id}`);

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

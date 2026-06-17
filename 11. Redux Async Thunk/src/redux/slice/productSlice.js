import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunk) => {
    try {
      const res = await fetch("https://fakestoreapi.com/products", {
        signal: thunk.signal,
      });
      if (!res.ok) {
        throw new Error("Error in fetching the API");
      }

      return await res.json();
    } catch (error) {
      if (error.name === "AbortError") {
        return;
      }

      return thunk.rejectWithValue(error.message);
    }
  },
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
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
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;

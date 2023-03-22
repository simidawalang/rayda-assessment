import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const { data } = await axios.get(
        `https://run.mocky.io/v3/${process.env.REACT_APP_API_KEY}`
      );

      return data;
    } catch (e) {
      console.error(e);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
   builder.addCase(getProducts.pending, (state) => {
     state.loading = true;
   })
  builder.addCase(getProducts.fulfilled, (state, { payload }) => {
    state.loading = false;
    state.products = payload;
  });  
  builder.addCase(getProducts.rejected, (state) => {
    state.loading = false;
    state.products = [];
  });
  },
});

export default productsSlice;

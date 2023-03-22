import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productSlice";

const store = configureStore({ reducer: { products: productsSlice.reducer } });


export type AppDispatch = typeof store.dispatch;

export default store;

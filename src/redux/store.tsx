import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductsSlice";
export const store = configureStore({
  reducer: {
    cartSlice: ProductSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

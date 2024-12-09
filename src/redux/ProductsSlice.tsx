import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  title: string;
  price: number;
  count: number;
  image: string;
}

const initialState: Product[] = [];
export const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.find(
        (elem) => elem.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.count += action.payload.count;
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      return state.filter((elem) => elem.id !== action.payload.id);
    },
    editCount: (
      state,
      action: PayloadAction<{ id: number; count: number }>
    ) => {
      const chosenItem = state.filter((elem) => elem.id === action.payload.id);
      if (chosenItem) {
        chosenItem.map((elem) => {
          elem.count += action.payload.count;
        });
      }
    },
    resetCart: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { addToCart, removeFromCart, editCount, resetCart } =
  ProductSlice.actions;
export default ProductSlice.reducer;

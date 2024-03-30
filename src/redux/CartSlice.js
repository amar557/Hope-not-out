import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] };

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    Increment: (state, action) => {
      state.cart.find((data) => data.id);
    },
  },
});
export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;

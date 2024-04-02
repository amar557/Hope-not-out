import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [], existing: false, subtotal: 0 };

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cart.some((data) => data.id === action.payload.id))
        return cartSlice.caseReducers.Increment(state, action);
      state.cart.unshift(action.payload);
    },
    DeleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    Increment: (state, action) => {
      const data = state.cart.find((data) => data.id === action.payload);
      data.quantity++;

      if (data.isDiscount) {
        data.total = data.quantity * data.discountRate;
      } else {
        data.total = data.quantity * data.rate;
      }
    },
    Decreament: (state, action) => {
      const item = state.cart.find((data) => data.id === action.payload);
      if (item.quantity < 2)
        return cartSlice.caseReducers.DeleteItem(state, action);
      item.quantity--;
      if (item.isDiscount) {
        item.total = item.quantity * item.discountRate;
      } else {
        item.total = item.quantity * item.rate;
      }
    },
  },
});
export default cartSlice.reducer;
export const { addToCart, Increment, Decreament, DeleteItem } =
  cartSlice.actions;

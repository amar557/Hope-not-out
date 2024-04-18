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
      cartSlice.caseReducers.SubTotal(state, action);
    },
    DeleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      cartSlice.caseReducers.SubTotal(state, action);
    },
    Increment: (state, action) => {
      const data = state.cart.find((data) => data.id === action.payload);
      data.quantity++;

      if (data.isDiscount) {
        data.total = data.quantity * data.discountRate;
      } else {
        data.total = data.quantity * data.rate;
      }
      cartSlice.caseReducers.SubTotal(state, action);
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
      cartSlice.caseReducers.SubTotal(state, action);
    },
    SubTotal: (state, action) => {
      state.subtotal = 0;
      if (state.cart.length > 0) {
        for (let i = 1; i <= state.cart.length; i++) {
          state.subtotal += state.cart[i - 1].total;
        }
      }
    },
    CoupenCode: (state, action) => {
      state.subtotal = state.subtotal - (state.subtotal * 40) / 100;
    },
  },
});
export default cartSlice.reducer;
export const {
  addToCart,
  Increment,
  Decreament,
  DeleteItem,
  SubTotal,
  CoupenCode,
} = cartSlice.actions;

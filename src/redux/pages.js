import { createSlice } from "@reduxjs/toolkit";
import { minKids } from "./AsyncFIrebase";
let initialState = { value: 0, products: [], loading: true };
const page = createSlice({
  name: "page",

  initialState,
  reducers: {
    // getbestSellingProducts: (state, action) => {
    //   //   state.bestSellingProducts = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(minKids.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(minKids.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(minKids.rejected, (state, action) => {
      state.value = action.payload;
    });
  },
});
// export const { getbestSellingProducts } = page.actions;
export default page.reducer;

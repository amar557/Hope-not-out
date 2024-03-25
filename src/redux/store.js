import { createSlice } from "@reduxjs/toolkit";
import { fetchBestSelling } from "./AsyncFIrebase";
let initialState = { value: 0, bestSellingProducts: [], loading: true };
const slice = createSlice({
  name: "reducer",

  initialState,
  reducers: {
    getbestSellingProducts: (state, action) => {
      state.bestSellingProducts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBestSelling.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchBestSelling.fulfilled, (state, action) => {
      state.loading = false;
      state.bestSellingProducts = action.payload;
    });
    builder.addCase(fetchBestSelling.rejected, (state, action) => {
      state.value = action.payload;
    });
  },
});
export const { getbestSellingProducts } = slice.actions;
export default slice.reducer;

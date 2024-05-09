import { createSlice } from "@reduxjs/toolkit";
import { fetchBestSelling } from "./AsyncFIrebase";
let initialState = { bestSellingProducts: [], loading: true, error: "" };
const slice = createSlice({
  name: "reducer",

  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBestSelling.pending, (state, action) => {
      state.bestSellingProducts = [];
      state.loading = true;
    });
    builder.addCase(fetchBestSelling.fulfilled, (state, action) => {
      state.loading = false;
      state.bestSellingProducts = action.payload;
    });
    builder.addCase(fetchBestSelling.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});
// export const { getbestSellingProducts } = slice.actions;
export default slice.reducer;

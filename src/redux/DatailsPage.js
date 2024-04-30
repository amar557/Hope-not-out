import { createSlice } from "@reduxjs/toolkit";
import { getDataByID } from "./AsyncFIrebase";
let initialState = {
  id: "",
  isLoading: false,
  details: {},
  error: "",
};
const dataPageSlice = createSlice({
  name: "datapage",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getDataByID.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getDataByID.fulfilled, (state, action) => {
      state.isLoading = false;
      state.details = action.payload;
    });
    builder.addCase(getDataByID.rejected, (state, action) => {
      state.error = "something went wrong";
    });
  },
});

// export const { getDataByID } = dataPageSlice.actions;

export default dataPageSlice.reducer;

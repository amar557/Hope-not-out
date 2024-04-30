import { createSlice } from "@reduxjs/toolkit";
import { SearchResult } from "./AsyncFIrebase";

let initialized = {
  data: [],
  isLoading: false,
  error: "",
};
const searchResult = createSlice({
  name: "searchresult",
  initialState: initialized,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SearchResult.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(SearchResult.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(SearchResult.rejected, (state, action) => {
      state.error = "something went wrong";
    });
  },
});
export default searchResult.reducer;

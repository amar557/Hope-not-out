import { configureStore } from "@reduxjs/toolkit";
import mainstore from "./store";
import detailsPage from "./DatailsPage";
import cartData from "./CartSlice";
import SearchResults from "./SearchResults";

const store = configureStore({
  reducer: {
    anchor: mainstore,
    detailsPage: detailsPage,
    cartData,
    SearchResults,
  },
});
export default store;

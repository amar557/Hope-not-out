import { configureStore } from "@reduxjs/toolkit";
import mainstore from "./store";
import detailsPage from "./DatailsPage";
import cartData from "./CartSlice";
import pages from "./pages";
const store = configureStore({
  reducer: {
    anchor: mainstore,
    detailsPage: detailsPage,
    cartData,
    pages,
  },
});
export default store;

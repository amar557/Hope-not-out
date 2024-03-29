import { configureStore } from "@reduxjs/toolkit";
import mainstore from "./store";
import detailsPage from "./DatailsPage";
import cartData from "./CartSlice";
const store = configureStore({
  reducer: {
    anchor: mainstore,
    detailsPage: detailsPage,
    cartData,
  },
});
export default store;

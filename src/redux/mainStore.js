import { configureStore } from "@reduxjs/toolkit";
import mainstore from "./store";
import detailsPage from "./DatailsPage";
const store = configureStore({
  reducer: {
    anchor: mainstore,
    detailsPage: detailsPage,
  },
});
export default store;

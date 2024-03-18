import { configureStore } from "@reduxjs/toolkit";
import mainstore from "./store";

const store = configureStore({
  reducer: {
    anchor: mainstore,
  },
});

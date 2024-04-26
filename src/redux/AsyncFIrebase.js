import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "../FireBase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBestSelling = createAsyncThunk("data", async (param) => {
  const query = await getDocs(collection(firestore, param));

  return query.docs;
});
export const minKids = createAsyncThunk("data2", async () => {
  const query = await getDocs(collection(firestore, "minikids"));
  return query.docs;
});

export const getDataByID = createAsyncThunk("detals", async (page) => {
  const colRef = doc(firestore, page.page, page.id);
  const data = await getDoc(colRef);
  if (data.exists()) return data.data();
  return "no document";
});

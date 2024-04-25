import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { firestore } from "../FireBase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBestSelling = createAsyncThunk("data", async () => {
  const query = await getDocs(collection(firestore, "bestsellingproducts"));

  return query.docs;
});
export const minKids = createAsyncThunk("data2", async () => {
  const query = await getDocs(collection(firestore, "minikids"));

  return query.docs;
});

export const getDataByID = createAsyncThunk("detals", async (id) => {
  const colRef = doc(firestore, "bestsellingproducts", id);
  const data = await getDoc(colRef);
  if (data.exists()) return data.data();
  else return "no document";
});

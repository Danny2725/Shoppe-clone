import { createSlice } from "@reduxjs/toolkit";
import jsonData from "../../data.json";

export const prodSlice = createSlice({
  name: "products",
  initialState: {
    data: jsonData.products,
  },
  reducers: {},
});

export const selectProducts = (state) => state.products.data;

export default prodSlice.reducer;

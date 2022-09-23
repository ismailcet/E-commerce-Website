import { createSlice } from "@reduxjs/toolkit";
import { createRoutesFromChildren } from "react-router-dom";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    addPrice: (state, action) => {
      state.totalPrice += action.payload;
    },
  },
});
export const { addItems, addPrice } = cartSlice.actions;
export default cartSlice.reducer;

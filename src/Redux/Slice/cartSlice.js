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
    deleteCartItem: (state, action) => {
      const deleteItemIndex = state.items.findIndex(
        (item) => item.product.id === action.payload
      );
      state.totalPrice -= state.items[deleteItemIndex].product.price;
      state.items.splice(deleteItemIndex, 1);
    },
  },
});
export const { addItems, addPrice, deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;

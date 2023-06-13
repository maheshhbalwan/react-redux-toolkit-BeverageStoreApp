// All cart related slices will be here

import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: [],
  reducers: {
    // add Item
    addItem: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const getItemsSelector = createSelector(
  (state) => state.cart,
  (state) => state
);

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    actionLoading: false,
    listLoading: false,
    errors: null,
    data: [],
  },
  reducers: {
    fetchProductList: (state, action) => {
      const { data, error } = action.payload;
      state.data = data;
      state.errors = error;
      state.listLoading = true;
    },
    resetLoading: (state) => {
      state.actionLoading = false;
      state.listLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchProductList, resetLoading } = productsSlice.actions;

export default productsSlice.reducer;

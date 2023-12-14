import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    actionLoading: false,
    listLoading: false,
    errors: null,
    data: [],
  },
  reducers: {
    fetchUserList: (state, action) => {
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
export const { fetchUserList, resetLoading } = usersSlice.actions;

export default usersSlice.reducer;

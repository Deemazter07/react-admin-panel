import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../pages/users/redux/userSlice";
import productsReducer from "../pages/products/redux/productSlice";

// Define the store first
const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Define the AppThunk type
export type AppThunk<ReturnType = void> = (
  dispatch: AppDispatch,
  getState: () => RootState
) => ReturnType;

export default store;

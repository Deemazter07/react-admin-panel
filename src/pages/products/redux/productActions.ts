import * as productSlice from "./productSlice";
import { findProducts } from "./productController";
import { AppThunk } from "../../../redux/store";

export const fetchProductList = (): AppThunk<void> => async (dispatch) => {
  try {
    const data = await findProducts();
    dispatch(productSlice.fetchProductList({ data }));
  } catch (error) {
    console.error("Error fetching user list:", error);
    dispatch(productSlice.fetchProductList({ error }));
  } finally {
    // * set timeout bcs not fetching actual API
    // ! Delete set timeout
    setTimeout(() => {
      dispatch(productSlice.resetLoading());
    }, 500);
  }
};

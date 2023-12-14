import * as userSlice from "./userSlice";
import { findUsers } from "./userController";
import { AppThunk } from "../../../redux/store";

export const fetchUserList = (): AppThunk<void> => async (dispatch) => {
  try {
    const data = await findUsers();
    dispatch(userSlice.fetchUserList({ data }));
  } catch (error) {
    console.error("Error fetching user list:", error);
    dispatch(userSlice.fetchUserList({ error }));
  } finally {
    // * set timeout bcs not fetching actual API
    // ! Delete set timeout
    setTimeout(() => {
      dispatch(userSlice.resetLoading());
    }, 500);
  }
};

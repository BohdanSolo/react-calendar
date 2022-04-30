import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import {
  setError,
  setIsAuth,
  setIsLoading,
  setUsers,
} from "../reducers/authSlice";
import UserService from "../../api/UserService";

export const login = createAsyncThunk(
  "auth/login",
  async (userObj: IUser, { dispatch }) => {
    try {
      const { username, password } = userObj;
      dispatch(setIsLoading(true));
      setTimeout(async () => {
        const res = await UserService.getUsers();
        const mockUser = res.data.filter(
          (user) => user.username === username && user.password === password
        )[0];
        if (mockUser) {
          localStorage.setItem("auth", "true");
          localStorage.setItem("username", mockUser.username);
          dispatch(setUsers(mockUser));
          dispatch(setIsAuth(true));
        } else {
          dispatch(setError("Incorrect password or username"));
        }
        dispatch(setIsLoading(false));
      }, 1000);
    } catch (e) {
      dispatch(setError("An error has occurred during logging"));
    }
  }
);

export const logout = createAsyncThunk("auth/logout", (_, { dispatch }) => {
  localStorage.removeItem("auth");
  localStorage.removeItem("username");
  dispatch(setIsAuth(false));
  dispatch(setUsers({} as IUser));
});

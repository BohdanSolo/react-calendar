import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";


interface initialStateTypes {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}

const initialState: initialStateTypes = {
  isAuth: false,
  error: "",
  isLoading: false,
  user: {} as IUser,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
      state.isLoading = false;
    },
    setUsers(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
      state.error = ""
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});



export const { setIsAuth, setUsers, setError, setIsLoading } =
  authSlice.actions;
export default authSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface initialStateTypes {
  isAuth: boolean;
}

const initialState: initialStateTypes = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login(state, action: PayloadAction<boolean>) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      state.isAuth === action.payload;
    },
  },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;

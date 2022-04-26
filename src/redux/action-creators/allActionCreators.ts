import { login, logout } from "./authActions";
import {
  setIsAuth,
  setUsers,
  setError,
  setIsLoading,
} from "../reducers/authSlice";

export const allActionCreators = {
  login,
  logout,
  setIsAuth,
  setUsers,
  setError,
  setIsLoading,
};

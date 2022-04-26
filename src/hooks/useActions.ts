import { useAppDispatch } from "./reduxHooks";
import { bindActionCreators } from "@reduxjs/toolkit";
import { allActionCreators } from "../redux/action-creators/allActionCreators";

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(allActionCreators, dispatch);
};

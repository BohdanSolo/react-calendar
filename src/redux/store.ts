import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import eventSlice from "./reducers/eventSlice";


export const rootReducer = combineReducers({
  auth: authSlice,
  events: eventSlice
});

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IGuest} from "../../models/IUser";
import { IEvent } from "../../models/IEvent";

interface initialStateTypes {
  guests: IGuest[];
  events: IEvent[];
  isLoading: boolean
}

const initialState: initialStateTypes = {
  guests: [],
  events: [],
  isLoading: false
};

export const eventSlice = createSlice({
  name: "eventSlice",
  initialState,
  reducers: {
    setGuests(state, action: PayloadAction<IGuest[]>) {
      state.guests = action.payload;
    },
    setEvents(state, action: PayloadAction<IEvent[]>) {
      state.events = action.payload;
    },
    setIsPending(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setGuests, setEvents, setIsPending } = eventSlice.actions;
export default eventSlice.reducer;

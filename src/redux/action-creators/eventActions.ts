import { createAsyncThunk } from "@reduxjs/toolkit";
import { setEvents, setGuests, setIsPending } from "../reducers/eventSlice";
import UserService from "../../api/UserService";
import { IEvent } from "../../models/IEvent";

export const fetchGuests = createAsyncThunk(
  "fetch/Guests",
  async (_, { dispatch }) => {
    try {
      setTimeout(async () => {
        const res = await UserService.getGuests();
        dispatch(setGuests(res.data));
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  }
);

export const createEvent = createAsyncThunk(
  "create/Event",
  async (event: IEvent, { dispatch }) => {
    try {
      dispatch(setIsPending(true));
      setTimeout(async () => {
        const events = localStorage.getItem("event") || "[]";
        const json = JSON.parse(events) as IEvent[];
        json.push(event);
        dispatch(setEvents(json));
        localStorage.setItem("event", JSON.stringify(json));
        dispatch(setIsPending(false));
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  }
);

export const fetchEvents = createAsyncThunk(
  "fetch/events",
  async (username: string, { dispatch }) => {
    try {
      const events = localStorage.getItem("event") || "[]";
      const jsonEv = JSON.parse(events) as IEvent[];
      const filteredEv = jsonEv.filter(
        (ev) => ev.author === username || ev.guest === username
      );
      dispatch(setEvents(filteredEv));
    } catch (e) {
      console.log(e);
    }
  }
);

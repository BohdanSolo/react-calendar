import { login, logout } from "./authActions";
import { fetchGuests, createEvent, fetchEvents } from "./eventActions";
import { setGuests, setEvents, setIsPending } from "../reducers/eventSlice";
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
  setGuests,
  setEvents,
  setIsPending,
  fetchGuests,
  createEvent,
  fetchEvents
};

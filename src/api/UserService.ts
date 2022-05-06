import axios, { AxiosResponse } from "axios";
import {IGuest, IUser} from "../models/IUser";


export const BASE_URL = "https://calendar-react-solo.herokuapp.com/api"
export default class UserService {
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return axios.get<IUser[]>(`${BASE_URL}/users`);
  }
  static async getGuests(): Promise<AxiosResponse<IGuest[]>> {
    return axios.get<IGuest[]>(`${BASE_URL}/guests`);
  }
}

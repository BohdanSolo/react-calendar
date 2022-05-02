import axios, { AxiosResponse } from "axios";
import {IGuest, IUser} from "../models/IUser";

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return axios.get<IUser[]>("http://localhost:3001/users");
  }
  static async getGuests(): Promise<AxiosResponse<IGuest[]>> {
    return axios.get<IGuest[]>("http://localhost:3001/guests");
  }
}

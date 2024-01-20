import axios from "axios";

import { backendURL } from "../constants";
import { User } from "../types";

export default async function getLoggedUser(): Promise<User | null> {
  try {
    const response = await axios.get(`${backendURL}/auth/logged`);
    return response.data;
  } catch (error) {
    return null;
  }
}
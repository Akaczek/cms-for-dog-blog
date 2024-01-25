import { createContext, useState, FC } from "react";
import axios from "axios";

import { User } from "../types";
import { backendURL } from "../constants";

export const AuthContext = createContext<{
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => Promise<void>;
}>(null);

export const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = async () => {
    try {
      await axios.post(`${backendURL}/auth/logout`);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (email: string, password: string): Promise<User | null> => {
    try {
      const response = await axios.post(`${backendURL}/auth/login`, {
        email,
        password,
      });
      setUser(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
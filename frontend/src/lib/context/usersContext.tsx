import axios from 'axios';
import { FC, createContext, useState } from 'react';

import { backendURL } from '../constants';
import { User } from '../types';

export type addUserType = {
  name: string;
  email: string;
  role: string;
};

export const UsersContext = createContext<{
  users: User[];
  getUsers: () => Promise<void>;
  deleteUser: (id: number) => Promise<void>;
  addUser: (user: addUserType, password: string) => Promise<void>;
  editUserRole: (id: number, role: string) => Promise<void>;
}>(null);

export const UsersProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(`${backendURL}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      await axios.delete(`${backendURL}/users/${id}`);
      await getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const addUser = async (user: addUserType, password: string) => {
    try {
      await axios.post(`${backendURL}/users`, { ...user, password: password });
      await getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const editUserRole = async (id: number, role: string) => {
    try {
      await axios.patch(`${backendURL}/users/${id}/role`, { role: role });
      await getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UsersContext.Provider value={{ users, getUsers, deleteUser, addUser, editUserRole }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
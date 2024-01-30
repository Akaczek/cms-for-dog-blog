import { FC, createContext, useState } from 'react';
import axios from 'axios';

import { Message } from '../types';
import { backendURL } from '../constants';

type addMessageType = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const MessagesContext = createContext<{
  messages: Message[] | null;
  getMessages: () => Promise<void>;
  addMessage: ({
    name,
    email,
    phone,
    message,
  }: addMessageType) => Promise<void>;
}>(null);

const MessagesProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[] | null>(null);

  const getMessages = async () => {
    try {
      const response = await axios.get(`${backendURL}/messages`);
      setMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addMessage = async ({
    name,
    email,
    phone,
    message,
  }: addMessageType) => {
    try {
      await axios.post(`${backendURL}/messages`, {
        name,
        email,
        phone,
        message,
      });
      await getMessages();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MessagesContext.Provider
      value={{ messages, getMessages, addMessage }}
      children={children}
    />
  );
};

export default MessagesProvider;

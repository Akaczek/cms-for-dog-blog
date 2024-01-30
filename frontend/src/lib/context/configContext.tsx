import axios from 'axios';
import { createContext, FC, useState } from 'react';

import { backendURL } from '../constants';
import { ConfigItem } from '../types';

export const ConfigContext = createContext<{
  config: ConfigItem[] | null;
  getConfig: () => Promise<void>;
  deleteConfig: (itemId: number) => Promise<void>;
  addConfig: (key: string, value: string, description: string) => Promise<void>;
  updateConfig: (
    itemId: number,
    value: string,
    description: string
  ) => Promise<void>;
}>(null);

const ConfigProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<ConfigItem[] | null>(null);

  const getConfig = async () => {
    try {
      const response = await axios.get(`${backendURL}/config`);
      setConfig(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteConfig = async (itemId: number) => {
    try {
      await axios.delete(`${backendURL}/config/${itemId}`);
      await getConfig();
    } catch (error) {
      console.error(error);
    }
  };

  const addConfig = async (key: string, value: string, description: string) => {
    try {
      await axios.post(`${backendURL}/config`, { key, value, description });
      await getConfig();
    } catch (error) {
      console.error(error);
    }
  };

  const updateConfig = async (
    itemId: number,
    value: string,
    description: string
  ) => {
    try {
      await axios.patch(`${backendURL}/config/${itemId}`, { value, description });
      await getConfig();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ConfigContext.Provider
      value={{ config, getConfig, updateConfig, addConfig, deleteConfig }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;

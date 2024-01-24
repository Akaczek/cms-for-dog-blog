import { createContext, useState, FC } from "react";
import axios from "axios";

import { Page } from "../types";
import { backendURL } from "../constants";

export const PagesContext = createContext<{
  pages: Page[];
  getPages: () => void;
}>(null);

export const PagesProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pages, setPages] = useState<Page[]>([]);

  const getPages = async () => {
    try {
      const response = await axios.get(`${backendURL}/pages`);
      console.log(response.data);
      setPages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PagesContext.Provider value={{ pages, getPages }}>
      {children}
    </PagesContext.Provider>
  );
};
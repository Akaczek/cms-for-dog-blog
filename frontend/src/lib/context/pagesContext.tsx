import axios from "axios";
import { FC, createContext, useState } from "react";

import { backendURL } from "../constants";
import { Page } from "../types";

export const PagesContext = createContext<{
  pages: Page[];
  getPages: () => Promise<void>;
  addPage: (pagePath: string, pageName: string, parentPageId?: number, isInHeader?: boolean) => Promise<void>;
  deletePage: (pageId: number) => Promise<void>;
}>(null);

export const PagesProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pages, setPages] = useState<Page[]>([]);

  const getPages = async () => {
    try {
      const response = await axios.get(`${backendURL}/pages`);
      setPages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addPage = async (pagePath: string, pageName: string, parentPageId?: number, isInHeader?: boolean) => {
    try {
      const response = await axios.post(`${backendURL}/pages`, {
        path: pagePath,
        name: pageName,
        ...(parentPageId && { parentPageId }),
        ...(isInHeader && { inHeader: isInHeader }),
      });
      console.log(response.data);
      await getPages();
    } catch (error) {
      console.error(error);
    }
  };

  const deletePage = async (pageId: number) => {
    try {
      const response = await axios.delete(`${backendURL}/pages/${pageId}`);
      console.log(response.data);
      await getPages();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PagesContext.Provider value={{ pages, getPages, addPage, deletePage }}>
      {children}
    </PagesContext.Provider>
  );
};
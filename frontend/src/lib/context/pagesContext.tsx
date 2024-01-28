import axios from 'axios';
import { FC, createContext, useState } from 'react';

import { backendURL } from '../constants';
import { Page } from '../types';
import { ComponentType } from '../types/Component';

export const PagesContext = createContext<{
  pages: Page[];
  getPages: () => Promise<void>;
  addPage: (
    pagePath: string,
    pageName: string,
    parentPageId?: number,
    isInHeader?: boolean
  ) => Promise<void>;
  deletePage: (pageId: number) => Promise<void>;
  addComponent: (
    pageId: number,
    componentType: ComponentType,
    order: number
  ) => Promise<void>;
  deleteComponent: (componentId: number) => Promise<void>;
}>(null);

export const PagesProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pages, setPages] = useState<Page[]>([]);

  const getPages = async () => {
    try {
      const response = await axios.get(`${backendURL}/pages`);
      setPages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addPage = async (
    pagePath: string,
    pageName: string,
    parentPageId?: number,
    isInHeader?: boolean
  ) => {
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

  const addComponent = async (
    pageId: number,
    componentType: ComponentType,
    order: number
  ) => {
    const formData = new FormData();
    formData.append('pageId', pageId.toString());
    formData.append('type', componentType);
    formData.append('order', order.toString());
    try {
      await axios.post(`${backendURL}/components`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      await getPages();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteComponent = async (componentId: number) => {
    try {
      const response = await axios.delete(
        `${backendURL}/components/${componentId}`
      );
      console.log(response.data);
      await getPages();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PagesContext.Provider
      value={{ pages, getPages, addPage, deletePage, addComponent, deleteComponent }}
    >
      {children}
    </PagesContext.Provider>
  );
};

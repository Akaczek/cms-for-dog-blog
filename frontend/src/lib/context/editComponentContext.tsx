import { FC, createContext, useState, useContext } from 'react';
import axios from 'axios';

import { Component } from '../types';
import { backendURL } from '../constants';
import { PagesContext } from './pagesContext';

export const EditComponentContext = createContext<{
  currentComponent: Component;
  setComponent: (component: Component) => void;
  updateComponent: (component: editComponentType, imageFile?: File) => void;
  updateLinkComponentImage: (image: File) => void;
  addLinkToComponent: (text: string, path: string) => void;
  deleteLinkFromComponent: (linkId: number) => void;
  updateLinkInComponent: (linkId: number, text: string, path: string) => void;
}>(null);

export type editComponentType = {
  title: string | null;
  imagePosition: string | null;
  content: string | null;
  path: string | null;
  dogId: number | null;
  galleryId: number | null;
  buttonContent: string | null;
};

export const EditComponentProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentComponent, setCurrentComponent] = useState<Component>(null);
  const { getPages } = useContext(PagesContext);

  const setComponent = (component: Component | null) => {
    setCurrentComponent(component);
  };

  const getComponent = async (id: number) => {
    try {
      const response = await axios.get(`${backendURL}/components/${id}`);
      setCurrentComponent(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateImage = async (image: File) => {
    const formData = new FormData();
    formData.append('imageFile', image);
    try {
      await axios.patch(
        `${backendURL}/components/${currentComponent.id}/image`,
        formData
      );
      await getPages();
    } catch (error) {
      console.error(error);
    }
  };

  const updateLinkComponentImage = async (image: File) => {
    const componentId = currentComponent.id;
    const formData = new FormData();
    formData.append('imageFile', image);
    try {
      await updateImage(image);
      await getPages();
      await getComponent(componentId);
    } catch (error) {
      console.error(error);
    }
  };

  const addLinkToComponent = async (text: string, path: string) => {
    const componentId = currentComponent.id;
    try {
      await axios.post(`${backendURL}/components/${componentId}`, {
        text,
        path,
      });
      await getPages();
      await getComponent(componentId);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteLinkFromComponent = async (linkId: number) => {
    const componentId = currentComponent.id;
    try {
      await axios.delete(`${backendURL}/components/${componentId}/${linkId}`);
      await getPages();
      await getComponent(componentId);
    } catch (error) {
      console.error(error);
    }
  };

  const updateLinkInComponent = async (
    linkId: number,
    text: string,
    path: string
  ) => {
    const componentId = currentComponent.id;
    try {
      await axios.patch(`${backendURL}/components/${componentId}/${linkId}`, {
        text,
        path,
      });
      await getPages();
      await getComponent(componentId);
    } catch (error) {
      console.error(error);
    }
  };

  const updateComponent = async (
    component: editComponentType,
    imageFile?: File
  ) => {
    const componentId = currentComponent.id;
    try {
      await axios.patch(`${backendURL}/components/${componentId}`, component);
      if (imageFile) {
        await updateImage(imageFile);
      }
      await getPages();
      await getComponent(componentId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EditComponentContext.Provider
      value={{
        currentComponent,
        setComponent,
        updateComponent,
        updateLinkComponentImage,
        addLinkToComponent,
        deleteLinkFromComponent,
        updateLinkInComponent,
      }}
    >
      {children}
    </EditComponentContext.Provider>
  );
};

import { FC, createContext, useState, useContext } from "react";
import axios from "axios";

import { Component } from "../types";
import { backendURL } from "../constants";
import { PagesContext } from "./pagesContext";

export const EditComponentContext = createContext<{
  currentComponent: Component;
  setComponent: (component: Component) => void;
  updateComponent: (component: editComponentType, imageFile?: File) => void;
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

  const updateImage = async (image: File) => {
    const formData = new FormData();
    formData.append("imageFile", image);
    try {
      await axios.patch(`${backendURL}/components/${currentComponent.id}/image`, formData);
    } catch (error) {
      console.error(error);
    }
  };
    
  const updateComponent = async (component: editComponentType, imageFile?: File) => {
    console.log(component);
    try {
      await axios.patch(`${backendURL}/components/${currentComponent.id}`, component);
      if (imageFile){
        await updateImage(imageFile);
      }
      await getPages();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EditComponentContext.Provider value={{ currentComponent, setComponent, updateComponent }}>
      {children}
    </EditComponentContext.Provider>
  );
};
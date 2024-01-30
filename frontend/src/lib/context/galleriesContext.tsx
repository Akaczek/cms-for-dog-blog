import axios from 'axios';
import { FC, createContext, useState } from 'react';

import { Gallery } from '../types';
import { backendURL } from '../constants';

type addEditGalleryItemType = {
  title: string;
  content: string;
  path: string;
  buttonContent: string;
};

export const GalleriesContext = createContext<{
  galleries: Gallery[];
  getGalleries: () => Promise<void>;
  addGallery: (galleryName: string) => Promise<void>;
  editGallery: (galleryId: number, galleryName: string) => Promise<void>;
  addItemToGallery: (
    galleryId: number,
    itemToAdd: addEditGalleryItemType,
    image: File
  ) => Promise<void>;
  editItemInGallery: (
    galleryId: number,
    galleryItemId: number,
    itemToEdit: addEditGalleryItemType,
    image?: File
  ) => Promise<void>;
  deleteItemFromGallery: (galleryId: number, galleryItemId: number) => Promise<void>;
  deleteGallery: (galleryId: number) => Promise<void>;
}>(null);

export const GalleriesProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [galleries, setGalleries] = useState<Gallery[]>([]);

  const getGalleries = async () => {
    try {
      const response = await axios.get(`${backendURL}/galleries`);
      setGalleries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addGallery = async (galleryName: string) => {
    try {
      const response = await axios.post(`${backendURL}/galleries`, {
        title: galleryName,
      });
      console.log(response.data);
      await getGalleries();
    } catch (error) {
      console.error(error);
    }
  };

  const editGallery = async (galleryId: number, galleryName: string) => {
    try {
      const response = await axios.patch(
        `${backendURL}/galleries/${galleryId}`,
        {
          title: galleryName,
        }
      );
      console.log(response.data);
      await getGalleries();
    } catch (error) {
      console.error(error);
    }
  };

  const updateImageItem = async (
    galleryId: number,
    galleryItemId: number,
    image: File
  ) => {
    try {
      const formData = new FormData();
      formData.append('imageFile', image);
      const response = await axios.patch(
        `${backendURL}/galleries/${galleryId}/${galleryItemId}/image`,
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteGallery = async (galleryId: number) => {
    try {
      const response = await axios.delete(
        `${backendURL}/galleries/${galleryId}`
      );
      console.log(response.data);
      await getGalleries();
    } catch (error) {
      console.error(error);
    }
  };

  const addItemToGallery = async (
    galleryId: number,
    itemToAdd: addEditGalleryItemType,
    image: File
  ) => {
    try {
      const formData = new FormData();
      formData.append('imageFile', image);
      formData.append('title', itemToAdd.title);
      formData.append('content', itemToAdd.content);
      formData.append('path', itemToAdd.path);
      formData.append('buttonContent', itemToAdd.buttonContent);
      const response = await axios.post(
        `${backendURL}/galleries/${galleryId}`,
        formData
      );
      console.log(response.data);
      await getGalleries();
    } catch (error) {
      console.error(error);
    }
  };

  const editItemInGallery = async (
    galleryId: number,
    galleryItemId: number,
    itemToEdit: addEditGalleryItemType,
    image?: File
  ) => {
    try {
      if (image) {
        await updateImageItem(galleryId, galleryItemId, image);
      }
      const response = await axios.patch(
        `${backendURL}/galleries/${galleryId}/${galleryItemId}`,
        itemToEdit
      );
      console.log(response.data);
      await getGalleries();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteItemFromGallery = async (
    galleryId: number,
    galleryItemId: number
  ) => {
    try {
      const response = await axios.delete(
        `${backendURL}/galleries/${galleryId}/${galleryItemId}`
      );
      console.log(response.data);
      await getGalleries();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GalleriesContext.Provider
      value={{
        galleries,
        getGalleries,
        addGallery,
        editGallery,
        addItemToGallery,
        editItemInGallery,
        deleteGallery,
        deleteItemFromGallery,
      }}
    >
      {children}
    </GalleriesContext.Provider>
  );
};

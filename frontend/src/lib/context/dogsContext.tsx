import axios from 'axios';
import { FC, createContext, useState } from 'react';

import { backendURL } from '../constants';
import { Dog } from '../types';

export type editDogType = {
  name: string;
  imageUrl: string;
  breedNumber: string;
  averageLifeSpan: string;
  temperament: string;
  weight: string;
  availability: string;
  colors: string;
  grooming: string;
};

export const DogsContext = createContext<{
  dogs: Dog[];
  getDogs: () => Promise<void>;
  addDog: (formData: FormData) => Promise<void>;
  deleteDog: (dogId: number) => Promise<void>;
  editDog: (dogId: number, dog: editDogType, image?: File) => Promise<void>;
}>(null);

export const DogsProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [dogs, setDogs] = useState<Dog[]>([]);

  const getDogs = async () => {
    try {
      const response = await axios.get(`${backendURL}/dogs`);
      setDogs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addDog = async (formData: FormData) => {
    try {
      const response = await axios.post(`${backendURL}/dogs`, formData);
      console.log(response.data);
      await getDogs();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteDog = async (dogId: number) => {
    try {
      await axios.delete(`${backendURL}/dogs/${dogId}`);
      await getDogs();
    } catch (error) {
      console.error(error);
    }
  };

  const editDog = async (dogId: number, dog: editDogType, image?: File) => {
    try {
      await axios.patch(`${backendURL}/dogs/${dogId}`, dog);
      if (image) {
        const formData = new FormData();
        formData.append('imageFile', image);
        await axios.patch(`${backendURL}/dogs/${dogId}/image`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
      await getDogs();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DogsContext.Provider value={{ dogs, getDogs, addDog, deleteDog, editDog }}>
      {children}
    </DogsContext.Provider>
  );
};

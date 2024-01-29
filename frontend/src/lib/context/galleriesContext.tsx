import axios from "axios";
import { FC, createContext, useState } from "react";

import { Gallery } from "../types";
import { backendURL } from "../constants";

export const GalleriesContext = createContext<{
  galleries: Gallery[];
  getGalleries: () => Promise<void>;
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

  return (
    <GalleriesContext.Provider value={{ galleries, getGalleries }}>
      {children}
    </GalleriesContext.Provider>
  );
};

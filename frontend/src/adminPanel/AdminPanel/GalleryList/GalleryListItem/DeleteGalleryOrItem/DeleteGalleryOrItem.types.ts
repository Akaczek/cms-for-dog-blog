import { Gallery } from "../../../../../lib/types";
import { GalleryItem } from "../../../../../lib/types/Gallery";

export interface IDeleteGalleryOrItemProps {
  gallery: Gallery;
  item?: GalleryItem;
  isGallery: boolean;
  onClose: () => void;
}
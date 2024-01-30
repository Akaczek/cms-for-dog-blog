import { Gallery } from "../../../../../lib/types";
import { GalleryItem } from "../../../../../lib/types/Gallery";

export interface IAddEditGalleryItemProps {
  galleryItem?: GalleryItem;
  gallery: Gallery;
  isEdit: boolean;
  onClose: () => void;
}
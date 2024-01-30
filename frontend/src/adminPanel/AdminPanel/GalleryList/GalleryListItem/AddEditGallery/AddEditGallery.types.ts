import { Gallery } from "../../../../../lib/types";

export interface IAddEditGalleryProps {
  gallery?: Gallery;
  isEdit: boolean;
  onClose: () => void;
}
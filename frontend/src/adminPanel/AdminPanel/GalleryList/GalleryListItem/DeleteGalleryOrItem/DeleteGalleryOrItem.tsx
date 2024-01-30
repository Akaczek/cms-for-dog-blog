import { FC, useContext } from "react";

import { ConfirmButton } from "../../../../../shared/Buttons";
import { ConfirmationMessage } from "../../../../../shared/Form";
import { IDeleteGalleryOrItemProps } from "./DeleteGalleryOrItem.types";
import { GalleriesContext } from "../../../../../lib/context/galleriesContext";

const DeleteGalleryOrItem: FC<IDeleteGalleryOrItemProps> = ({ 
  gallery,
  item,
  isGallery,
  onClose,
 }) => {
  const { deleteGallery, deleteItemFromGallery } = useContext(GalleriesContext);

  const handleDeleteGallery = async () => {
    await deleteGallery(gallery.id);
    onClose();
  };

  const handleDeleteItem = async () => {
    await deleteItemFromGallery(gallery.id, item.id);
    onClose();
  };

  const handleConfirm = () => {
    if (isGallery) {
      handleDeleteGallery();
    } else {
      handleDeleteItem();
    }
  };

  return (
    <>
      <ConfirmationMessage>
        Are you sure you want to delete this {isGallery ? 'gallery' : 'item'}?
      </ConfirmationMessage>
      <ConfirmButton onClick={handleConfirm}>Delete</ConfirmButton>
    </>
  );
};

export default DeleteGalleryOrItem;
import { FC, useState } from 'react';

import {
  ActionsWrapper,
  ListItem,
  ListItemAction,
  ListItemActionIcon,
  ListItemValue,
  SecondaryListItem,
} from '../../../../shared/List/List.styles';
import { GalleryItemImg } from './GalleryListItem.styles';
import { IGalleryListItemProps } from './GalleryListItem.types';
import edit from '../../../../assets/icons/edit.svg';
import deleteIcon from '../../../../assets/icons/delete.svg';
import add from '../../../../assets/icons/add.svg';
import dogPaw from '../../../../assets/paw.svg';
import { backendURL } from '../../../../lib/constants';
import Modal from '../../../../shared/Modal';
import { useModal } from '../../../../lib/hooks';
import DeleteGalleryOrItem from './DeleteGalleryOrItem';
import { GalleryItem } from '../../../../lib/types/Gallery';
import AddEditGallery from './AddEditGallery';
import AddEditGallleryItem from './AddEditGallleryItem';

const GalleryListItem: FC<IGalleryListItemProps> = ({ gallery }) => {
  const [isEditGalleryModal, toggleEditGalleryModal] = useModal();
  const [isDeleteGalleryModal, toggleDeleteGalleryModal] = useModal();
  const [isAddItemModal, toggleAddItemModal] = useModal();
  const [isEditItemModal, toggleEditItemModal] = useModal();
  const [isDeleteItemModal, toggleDeleteItemModal] = useModal();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <>
      {isEditGalleryModal && (
        <Modal toggle={toggleEditGalleryModal} title='Edit gallery'>
          <AddEditGallery
            gallery={gallery}
            isEdit={true}
            onClose={toggleEditGalleryModal}
          />
        </Modal>
      )}
      {isDeleteGalleryModal && (
        <Modal toggle={toggleDeleteGalleryModal} title='Delete gallery'>
          <DeleteGalleryOrItem
            gallery={gallery}
            isGallery={true}
            onClose={toggleDeleteGalleryModal}
          />
        </Modal>
      )}
      {isAddItemModal && (
        <Modal toggle={toggleAddItemModal} title='Add new item'>
          <AddEditGallleryItem
            gallery={gallery}
            isEdit={false}
            onClose={toggleAddItemModal}
          />
        </Modal>
      )}
      {isEditItemModal && (
        <Modal toggle={toggleEditItemModal} title='Edit item'>
          <AddEditGallleryItem
            gallery={gallery}
            isEdit={true}
            galleryItem={selectedItem}
            onClose={toggleEditItemModal}
          />
        </Modal>
      )}
      {isDeleteItemModal && (
        <Modal toggle={toggleDeleteItemModal} title='Delete item'>
          <DeleteGalleryOrItem
            gallery={gallery}
            item={selectedItem}
            isGallery={false}
            onClose={toggleDeleteItemModal}
          />
        </Modal>
      )}
      <ListItem>
        <ListItemValue>{gallery.title}</ListItemValue>
        <ActionsWrapper>
          <ListItemAction onClick={toggleAddItemModal}>
            <ListItemActionIcon src={add} />
          </ListItemAction>
          <ListItemAction onClick={toggleEditGalleryModal}>
            <ListItemActionIcon src={edit} />
          </ListItemAction>
          <ListItemAction onClick={toggleDeleteGalleryModal}>
            <ListItemActionIcon src={deleteIcon} />
          </ListItemAction>
        </ActionsWrapper>
      </ListItem>
      {gallery.galleryItems.map((galleryItem) => (
        <SecondaryListItem key={galleryItem.id}>
          <ListItemValue>{galleryItem.title}</ListItemValue>
          <GalleryItemImg
            src={`${backendURL}/images/${galleryItem?.imageUrl}`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = dogPaw;
            }}
          />
          <ActionsWrapper>
            <ListItemAction
              onClick={() => {
                setSelectedItem(galleryItem);
                toggleEditItemModal();
              }}
            >
              <ListItemActionIcon src={edit} />
            </ListItemAction>
            <ListItemAction
              onClick={() => {
                setSelectedItem(galleryItem);
                toggleDeleteItemModal();
              }}
            >
              <ListItemActionIcon src={deleteIcon} />
            </ListItemAction>
          </ActionsWrapper>
        </SecondaryListItem>
      ))}
    </>
  );
};

export default GalleryListItem;

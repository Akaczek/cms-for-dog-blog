import { FC, useContext } from 'react';

import {
  List,
  ListHeader,
  ListItemAction,
  ListItemActionIcon,
  ListWrapper,
} from '../../../shared/List/List.styles';
import { MainViewWrapper } from '../AdminPanel.styles';
import add from '../../../assets/icons/add.svg';
import { GalleriesContext } from '../../../lib/context/galleriesContext';
import GalleryListItem from './GalleryListItem';
import Modal from '../../../shared/Modal';
import { useModal } from '../../../lib/hooks';
import AddEditGallery from './GalleryListItem/AddEditGallery';

const GalleryList: FC = () => {
  const { galleries } = useContext(GalleriesContext);
  const [isAddModal, toggleAddModal] = useModal();

  return (
    <MainViewWrapper>
      {isAddModal && (
        <Modal toggle={toggleAddModal} title='Add new gallery'>
          <AddEditGallery isEdit={false} onClose={toggleAddModal} />
        </Modal>
      )}
      <ListWrapper>
        <ListHeader>Galleries</ListHeader>
        <ListItemAction>
          <ListItemActionIcon src={add} onClick={toggleAddModal} />
        </ListItemAction>
        <List>
          {galleries &&
            galleries.map((gallery) => (
              <GalleryListItem key={gallery.id} gallery={gallery} />
            ))}
        </List>
      </ListWrapper>
    </MainViewWrapper>
  );
};

export default GalleryList;

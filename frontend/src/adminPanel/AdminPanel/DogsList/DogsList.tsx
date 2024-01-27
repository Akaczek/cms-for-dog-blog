import { FC, useContext, useState } from 'react';

import {
  List,
  ListHeader,
  ListWrapper,
  ListItemAction,
  ListItemActionIcon,
} from '../../../shared/List/List.styles';
import Modal from '../../../shared/Modal';
import { DogsContext } from '../../../lib/context/dogsContext';
import DogsListItem from './DogsListItem';
import { useModal } from '../../../lib/hooks';
import { Dog } from '../../../lib/types';
import AddEditDog from './AddEditDog';
import add from '../../../assets/icons/add.svg';
import DeleteDog from './DeleteDog';

const DogsList: FC = () => {
  const { dogs } = useContext(DogsContext);
  const [isAddModalOpen, toggleAddModal] = useModal();
  const [isDeleteModalOpen, toggleDeleteModal] = useModal();
  const [isEditModalOpen, toggleEditModal] = useModal();
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);

  const handleOpenAddModal = () => {
    toggleAddModal();
  };

  const handleOpenEditModal = (dog: Dog) => {
    setSelectedDog(dog);
    toggleEditModal();
  };

  const handleOpenDeleteModal = (dog: Dog) => {
    setSelectedDog(dog);
    toggleDeleteModal();
  };

  return (
    <ListWrapper>
      {isAddModalOpen && (
        <Modal title={'Add dog'} toggle={toggleAddModal}>
          <AddEditDog onClose={toggleAddModal} />
        </Modal>
      )}
      {isDeleteModalOpen && (
        <Modal title={'Delete dog'} toggle={toggleDeleteModal}>
          <DeleteDog dog={selectedDog} onClose={toggleDeleteModal} />
        </Modal>
      )}
      {isEditModalOpen && (
        <Modal title={'Edit dog'} toggle={toggleEditModal}>
          <AddEditDog dog={selectedDog} onClose={toggleEditModal} />
        </Modal>
      )}
      <ListHeader>Dogs</ListHeader>
      <ListItemAction onClick={() => handleOpenAddModal()}>
        <ListItemActionIcon src={add} />
      </ListItemAction>
      <List>
        {dogs &&
          dogs
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((dog) => (
              <DogsListItem
                key={dog.id}
                dog={dog}
                onDogDelete={handleOpenDeleteModal}
                onDogEdit={handleOpenEditModal}
              />
            ))}
      </List>
    </ListWrapper>
  );
};

export default DogsList;

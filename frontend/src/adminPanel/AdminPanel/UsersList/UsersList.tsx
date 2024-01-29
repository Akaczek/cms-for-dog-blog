import { FC, useContext, useState } from 'react';

import add from '../../../assets/icons/add.svg';
import { UsersContext } from '../../../lib/context/usersContext';
import { useModal } from '../../../lib/hooks';
import { User } from '../../../lib/types';
import {
  List,
  ListHeader,
  ListItemAction,
  ListItemActionIcon,
  ListWrapper,
} from '../../../shared/List/List.styles';
import Modal from '../../../shared/Modal';
import UsersListItem from './UsersListItem';
import DeleteUser from './DeleteUser';
import AddUser from './AddUser';
import EditUserRole from './EditUserRole/EditUserRole';
import { MainViewWrapper } from '../AdminPanel.styles';

const UsersList: FC = () => {
  const { users } = useContext(UsersContext);
  const [isAddModalOpen, toggleAddModal] = useModal();
  const [isDeleteModalOpen, toggleDeleteModal] = useModal();
  const [isEditModalOpen, toggleEditModal] = useModal();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleOpenAddModal = () => {
    toggleAddModal();
  };

  const handleOpenEditModal = (user: User) => {
    setSelectedUser(user);
    toggleEditModal();
  };

  const handleOpenDeleteModal = (user: User) => {
    setSelectedUser(user);
    toggleDeleteModal();
  };

  return (
    <MainViewWrapper>
      <ListWrapper>
        {isAddModalOpen && (
          <Modal title={'Add user'} toggle={toggleAddModal}>
            <AddUser onClose={toggleAddModal} />
          </Modal>
        )}
        {isDeleteModalOpen && (
          <Modal title={'Delete user'} toggle={toggleDeleteModal}>
            <DeleteUser user={selectedUser} onClose={toggleDeleteModal} />
          </Modal>
        )}
        {isEditModalOpen && (
          <Modal title={'Edit user'} toggle={toggleEditModal}>
            <EditUserRole user={selectedUser} onClose={toggleEditModal} />
          </Modal>
        )}
        <ListHeader>Users</ListHeader>
        <ListItemAction onClick={handleOpenAddModal}>
          <ListItemActionIcon src={add} />
        </ListItemAction>
        <List>
          {users &&
            users
              .filter((user) => user.role !== 'superadmin')
              .map((user) => {
                return (
                  <UsersListItem
                    key={user.id}
                    user={user}
                    onUserDelete={handleOpenDeleteModal}
                    onUserEdit={handleOpenEditModal}
                  />
                );
              })}
        </List>
      </ListWrapper>
    </MainViewWrapper>
  );
};

export default UsersList;

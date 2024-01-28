import { FC } from 'react';

import {
  ActionsWrapper,
  ListItem,
  ListItemAction,
  ListItemActionIcon,
  ListItemValue,
  ListItemSecondaryValue,
} from '../../../../shared/List/List.styles';
import { IUsersListProps } from './UsersListItem.types';
import editIcon from '../../../../assets/icons/edit.svg';
import deleteIcon from '../../../../assets/icons/delete.svg';

const UsersListItem: FC<IUsersListProps> = ({ user, onUserDelete, onUserEdit }) => {
  return (
    <ListItem key={user.id}>
      <ListItemValue>
        {user.email}
      </ListItemValue>
      <ListItemSecondaryValue>
        {user.role}
      </ListItemSecondaryValue>
      <ActionsWrapper>
        <ListItemAction onClick={() => onUserEdit(user)}>
          <ListItemActionIcon src={editIcon} />
        </ListItemAction>
        <ListItemAction onClick={() => onUserDelete(user)}>
          <ListItemActionIcon src={deleteIcon} />
        </ListItemAction>
      </ActionsWrapper>
    </ListItem>
  );
};

export default UsersListItem;
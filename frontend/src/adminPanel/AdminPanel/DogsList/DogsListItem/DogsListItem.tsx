import { FC } from 'react';

import {
  ActionsWrapper,
  ListItem,
  ListItemAction,
  ListItemActionIcon,
  ListItemValue,
} from '../../../../shared/List/List.styles';
import { IDogsListItemProps } from './DogsListItem.types';
import deleteIcon from '../../../../assets/icons/delete.svg';
import editIcon from '../../../../assets/icons/edit.svg';

const DogsListItem: FC<IDogsListItemProps> = ({ dog, onDogDelete, onDogEdit }) => {
  return (
    <ListItem key={dog.id}>
      <ListItemValue>
        {dog.name}
      </ListItemValue>
      <ActionsWrapper>
        <ListItemAction onClick={() => onDogEdit(dog)}>
          <ListItemActionIcon src={editIcon} />
        </ListItemAction>
        <ListItemAction onClick={() => onDogDelete(dog)}>
          <ListItemActionIcon src={deleteIcon} />
        </ListItemAction>
      </ActionsWrapper>
    </ListItem>
  );
};

export default DogsListItem;

import { FC } from 'react';

import {
  ListWrapper,
  ListHeader,
  List,
  ListItem,
  ListItemValue,
  ListItemAction,
  ListItemActionIcon,
} from '../../../shared/List/List.styles';

const PagesList: FC = () => {
  return (
    <ListWrapper>
      <ListHeader>
        Pages
      </ListHeader>
      <List>
        <ListItem>
          <ListItemValue>Home</ListItemValue>
          <ListItemAction>
            <ListItemActionIcon />
          </ListItemAction>
        </ListItem>
        <ListItem>
          <ListItemValue>Home</ListItemValue>
          <ListItemAction>
            <ListItemActionIcon />
          </ListItemAction>
        </ListItem>
        <ListItem>
          <ListItemValue>Home</ListItemValue>
          <ListItemAction>
            <ListItemActionIcon />
          </ListItemAction>
        </ListItem>
      </List>
    </ListWrapper>
  );
};

export default PagesList;

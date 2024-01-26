import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import add from '../../../../assets/icons/add.svg';
import deleteIcon from '../../../../assets/icons/delete.svg';
import { Page } from '../../../../lib/types';
import {
  ActionsWrapper,
  ListItem,
  ListItemAction,
  ListItemActionIcon,
  ListItemSecondaryValue,
  MainListItem,
  SecondaryListItem,
  TertiaryListItem,
} from '../../../../shared/List/List.styles';
import { PagesListItemValue } from './PagesListItem.styles';
import { IPagesListItemProps } from './PagesListItem.types';

const PagesListItem: FC<IPagesListItemProps> = ({page, pageType, handleOpenAddPageModal, handleOpenDeletePageModal}) => {
  const navigate = useNavigate();

  const renderPageListItem = (pageToRender: Page, type: 'page' | 'subpage' | 'subsubpage') => {
    switch (type) {
      case 'page':
        if (pageToRender.path === '/')
          return (
            <MainListItem key={pageToRender.id}>
              <PagesListItemValue onClick={() => navigate('/admin')}>{pageToRender.name}</PagesListItemValue>
              <ListItemSecondaryValue>{pageToRender.path}</ListItemSecondaryValue>
              <ActionsWrapper>
                <ListItemAction onClick={() => handleOpenAddPageModal(pageToRender)}>
                  <ListItemActionIcon src={add} />
                </ListItemAction>
              </ActionsWrapper>
            </MainListItem>
          );
        return (
          <ListItem key={pageToRender.id}>
            <PagesListItemValue onClick={() => navigate('/admin' + pageToRender.path)}>{pageToRender.name}</PagesListItemValue>
            <ListItemSecondaryValue>{pageToRender.path}</ListItemSecondaryValue>
            <ActionsWrapper>
              <ListItemAction onClick={() => handleOpenAddPageModal(pageToRender)}>
                <ListItemActionIcon src={add} />
              </ListItemAction>
              <ListItemAction onClick={() => handleOpenDeletePageModal(pageToRender)}>
                <ListItemActionIcon src={deleteIcon} />
              </ListItemAction>
            </ActionsWrapper>
          </ListItem>
        );
      case 'subpage':
        return (
          <SecondaryListItem key={pageToRender.id}>
            <PagesListItemValue onClick={() => navigate('/admin' + pageToRender.path)}>{pageToRender.name}</PagesListItemValue>
            <ListItemSecondaryValue>{pageToRender.path}</ListItemSecondaryValue>
            <ActionsWrapper>
              <ListItemAction onClick={() => handleOpenAddPageModal(pageToRender)}>
                <ListItemActionIcon src={add} />
              </ListItemAction>
              <ListItemAction onClick={() => handleOpenDeletePageModal(pageToRender)}>
                <ListItemActionIcon src={deleteIcon} />
              </ListItemAction>
            </ActionsWrapper>
          </SecondaryListItem>
        );
      case 'subsubpage':
        return (
          <TertiaryListItem key={pageToRender.id}>
            <PagesListItemValue onClick={() => navigate('/admin' + pageToRender.path)}>{pageToRender.name}</PagesListItemValue>
            <ListItemSecondaryValue>{pageToRender.path}</ListItemSecondaryValue>
            <ActionsWrapper>
              <ListItemAction onClick={() => handleOpenDeletePageModal(pageToRender)}>
                <ListItemActionIcon src={deleteIcon} />
              </ListItemAction>
            </ActionsWrapper>
          </TertiaryListItem>
        );
      default:
        return null;
    }
  };

  return renderPageListItem(page, pageType);
};

export default PagesListItem;

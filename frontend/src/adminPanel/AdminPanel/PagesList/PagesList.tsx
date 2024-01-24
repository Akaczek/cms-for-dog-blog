import { FC, useContext, useEffect } from 'react';

import {
  ListWrapper,
  ListHeader,
  List,
  ListItem,
  SecondaryListItem,
  TertiaryListItem,
  ListItemValue,
  ListItemSecondaryValue,
  ListItemAction,
  ListItemActionIcon,
} from '../../../shared/List/List.styles';
import { PagesContext } from '../../../lib/context/pagesContext';
import { Page } from '../../../lib/types';

const PagesList: FC = () => {
  const { pages, getPages } = useContext(PagesContext);

  useEffect(() => {
    getPages();
  },[]);

  const renderPage = (page: Page, type: 'page' | 'subpage' | 'subsubpage') => {
    switch (type) {
      case 'page':
        return (
          <ListItem key={page.id}>
            <ListItemValue>{page.name}</ListItemValue>
            <ListItemSecondaryValue>{page.path}</ListItemSecondaryValue>
            <ListItemAction>
              <ListItemActionIcon />
            </ListItemAction>
          </ListItem>
        );
      case 'subpage':
        return (
          <SecondaryListItem key={page.id}>
            <ListItemValue>{page.name}</ListItemValue>
            <ListItemSecondaryValue>{page.path}</ListItemSecondaryValue>
            <ListItemAction>
              <ListItemActionIcon />
            </ListItemAction>
          </SecondaryListItem>
        );
      case 'subsubpage':
        return (
          <TertiaryListItem key={page.id}>
            <ListItemValue>{page.name}</ListItemValue>
            <ListItemSecondaryValue>{page.path}</ListItemSecondaryValue>
          </TertiaryListItem>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    console.log(pages);
  }, [pages]);

  return (
    <ListWrapper>
      <ListHeader>Pages</ListHeader>
      <List>
        {pages.map((page) => {
          if (page.parentPageId === null) {
            return (
              <>
                {renderPage(page, 'page')}
                {page.subpages.map((subpage) => {
                  return (
                    <>
                      {renderPage(subpage, 'subpage')}
                      {subpage.subpages.map((subsubpage) => {
                        return renderPage(subsubpage, 'subsubpage');
                      })}
                    </>
                  );
                })}
              </>
            );
          }
        })}
      </List>
    </ListWrapper>
  );
};

export default PagesList;

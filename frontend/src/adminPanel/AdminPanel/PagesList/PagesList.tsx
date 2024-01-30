import { FC, useContext, useState, useEffect } from 'react';

import { PagesContext } from '../../../lib/context/pagesContext';
import { useModal } from '../../../lib/hooks';
import { Page } from '../../../lib/types';
import {
  List,
  ListHeader,
  ListWrapper,
} from '../../../shared/List/List.styles';
import Modal from '../../../shared/Modal';
import AddPage from './AddPage';
import DeletePage from './DeletePage';
import PagesListItem from './PagesListItem';
import { MainViewWrapper } from '../AdminPanel.styles';

const PagesList: FC = () => {
  const { pages } = useContext(PagesContext);
  const [isAddModalOpen, toggleAddModal] = useModal();
  const [isDeleteModalOpen, toggleDeleteModal] = useModal();
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [numberOfPagesInHeader, setNumberOfPagesInHeader] = useState<number>(0);

  const handleOpenAddModal = (page: Page) => {
    setSelectedPage(page);
    toggleAddModal();
  };

  const handleOpenDeleteModal = (page: Page) => {
    setSelectedPage(page);
    toggleDeleteModal();
  };

  useEffect(() => {
    const numberOfPagesInHeader = pages.filter((page) => (page.inHeader && page.parentPageId === null)).length;
    setNumberOfPagesInHeader(numberOfPagesInHeader);
  }, [pages]);


  return (
    <MainViewWrapper>
      <ListWrapper>
        {isAddModalOpen && (
          <Modal title={'Add page'} toggle={toggleAddModal}>
            <AddPage
              parentPage={selectedPage}
              onClose={toggleAddModal}
              isAddingToMainPage={selectedPage.path === '/'}
              isOverFivePagesInHeader={numberOfPagesInHeader >= 5}
            />
          </Modal>
        )}
        {isDeleteModalOpen && (
          <Modal title={'Delete page'} toggle={toggleDeleteModal}>
            <DeletePage page={selectedPage} onClose={toggleDeleteModal} />
          </Modal>
        )}
        <ListHeader>Pages</ListHeader>
        <List>
          {pages.sort(
            (a, b) => a.id - b.id
          ).map((page) => {
            if (page.parentPageId === null) {
              return (
                <>
                  <PagesListItem
                    key={page.id}
                    page={page}
                    pageType={'page'}
                    handleOpenAddPageModal={handleOpenAddModal}
                    handleOpenDeletePageModal={handleOpenDeleteModal}
                  />
                  {page.subpages.map((subpage) => {
                    return (
                      <>
                        <PagesListItem
                          key={subpage.id}
                          page={subpage}
                          pageType={'subpage'}
                          handleOpenAddPageModal={handleOpenAddModal}
                          handleOpenDeletePageModal={handleOpenDeleteModal}
                        />
                        {subpage.subpages.map((subsubpage) => {
                          return (
                            <PagesListItem
                              key={subsubpage.id}
                              page={subsubpage}
                              pageType={'subsubpage'}
                              handleOpenAddPageModal={handleOpenAddModal}
                              handleOpenDeletePageModal={handleOpenDeleteModal}
                            />
                          );
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
    </MainViewWrapper>
  );
};

export default PagesList;

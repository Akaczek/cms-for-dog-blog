import { FC, useContext } from 'react';

import { PagesContext } from '../../../lib/context/pagesContext';
import { ConfirmButton } from '../../../shared/Buttons';
import { ConfirmationMessage } from './DeletePage.styles';
import { IDeletePageProps } from './DeletePage.types';

const DeletePage: FC<IDeletePageProps> = ({ page, onClose }) => {
  const { deletePage } = useContext(PagesContext);

  const handleDeletePage = async () => {
    await deletePage(page.id);
    onClose();
  };

  return (
    <>
      <ConfirmationMessage>
        Are you sure you want to delete this page?
        {page.subpages?.length > 0 && (
          <>
            <br />
            This page has subpages. They will be deleted as well.
          </>
        )}
      </ConfirmationMessage>
      <ConfirmButton onClick={handleDeletePage}>Delete</ConfirmButton>
    </>
  );
};

export default DeletePage;

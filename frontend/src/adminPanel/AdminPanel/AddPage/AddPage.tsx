import { FC, useContext, useState } from 'react';

import { PagesContext } from '../../../lib/context/pagesContext';
import { ConfirmButton } from '../../../shared/Buttons';
import {
  Checkbox,
  CheckboxWrapper,
  InputPrefix,
} from './AddPage.styles';
import { WarningMessage, Input, InputLabel, InputWrapper } from '../../../shared/Form';
import { IAddPageProps } from './AddPage.types';

const AddPage: FC<IAddPageProps> = ({
  parentPage,
  onClose,
  isAddingToMainPage,
}) => {
  const [pagePath, setPagePath] = useState('');
  const [pageName, setPageName] = useState('');
  const [isInHeader, setIsInHeader] = useState(false);
  const [warning, setWarning] = useState('');

  const { addPage } = useContext(PagesContext);

  const handleAddPage = async () => {
    console.log(parentPage);
    if (pagePath === '' || pageName === '') {
      setWarning('Please fill all fields');
    } else {
      setWarning('');
      if (isAddingToMainPage) {
        await addPage('/' + pagePath, pageName, null, isInHeader);
        onClose();
      } else {
        await addPage(
          `${parentPage.path}/${pagePath}`,
          pageName,
          parentPage?.id,
          isInHeader
        );
        onClose();
      }
    }
  };

  return (
    <>
      {warning !== '' && <WarningMessage>{warning}</WarningMessage>}
      <InputLabel>Page path</InputLabel>
      <InputWrapper>
        {isAddingToMainPage ? (
          <InputPrefix>/</InputPrefix>
        ) : (
          <InputPrefix>{parentPage.path}/</InputPrefix>
        )}
        <Input value={pagePath} onChange={(e) => setPagePath(e.target.value)} />
      </InputWrapper>
      <InputLabel>Page name</InputLabel>
      <InputWrapper>
        <Input value={pageName} onChange={(e) => setPageName(e.target.value)} />
      </InputWrapper>
      {(parentPage.parentPageId === null || parentPage?.inHeader) && (
        <>
          <InputLabel>Is in header</InputLabel>
          <CheckboxWrapper>
            <Checkbox
              type='checkbox'
              checked={isInHeader}
              onChange={() => setIsInHeader(!isInHeader)}
            />
          </CheckboxWrapper>
        </>
      )}
      <ConfirmButton onClick={handleAddPage}>Add page</ConfirmButton>
    </>
  );
};

export default AddPage;

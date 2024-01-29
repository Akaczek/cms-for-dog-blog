import { FC, useContext, useState } from 'react';

import { IEditLinksProps } from './EditLinks.types';
import { whatCanBeEdited } from '../../../../../lib/constants';
import {
  EditInput,
  EditInputLabel,
} from '../EditComponent/EditComponent.styles';
import { EditComponentContext } from '../../../../../lib/context/editComponentContext';
import { ConfirmButton } from '../../../../../shared/Buttons';
import { useModal } from '../../../../../lib/hooks';
import Modal from '../../../../../shared/Modal';
import {
  FixeWidthInputWrapper,
  InputLabel,
  Input,
} from '../../../../../shared/Form';
import { AddLinkButton } from '../EditPanel.styles';
import LinkItem from './LinkItem';
import { WarningMessage } from '../../../../../shared/Form';

const EditLinks: FC<IEditLinksProps> = ({ component }) => {
  const { updateLinkComponentImage, addLinkToComponent } =
    useContext(EditComponentContext);
  const [text, setText] = useState('');
  const [path, setPath] = useState('');
  const [warning, setWarning] = useState('');
  const [isOpen, toggleOpen] = useModal();

  const handleSubmit = async () => {
    const image = (
      document.getElementById('editComponentImage') as HTMLInputElement
    )?.files?.[0];
    if (image) {
      await updateLinkComponentImage(image);
    }
  };

  const handleAddLink = async () => {
    if (text === '' || path === '') {
      setWarning('Values cannot be empty');
      return;
    }
    await addLinkToComponent(text, path);
    setText('');
    setPath('');
    setWarning('');
    toggleOpen();
  };

  return (
    <>
      {isOpen && (
        <Modal title='Add link' toggle={toggleOpen}>
          {warning && <WarningMessage>{warning}</WarningMessage>}
          <FixeWidthInputWrapper>
            <InputLabel htmlFor='text'>Text</InputLabel>
            <Input
              id='text'
              type='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </FixeWidthInputWrapper>
          <FixeWidthInputWrapper>
            <InputLabel htmlFor='path'>Path</InputLabel>
            <Input
              id='path'
              type='path'
              value={path}
              autoComplete='off'
              onChange={(e) => setPath(e.target.value)}
            />
          </FixeWidthInputWrapper>
          <ConfirmButton onClick={handleAddLink}>Confirm</ConfirmButton>
        </Modal>
      )}
      {whatCanBeEdited[component.type].map((property) => {
        switch (property) {
          case 'imageUrl':
            return (
              <>
                <EditInputLabel>Image</EditInputLabel>
                <EditInput
                  type='file'
                  id='editComponentImage'
                  accept='.jpg,.jpeg,.png'
                />
              </>
            );
          case 'links':
            return (
              <>
                <EditInputLabel>Links</EditInputLabel>
                {component.links.map((link) => (
                  <LinkItem link={link} />
                ))}
                <AddLinkButton onClick={toggleOpen}>Add link</AddLinkButton>
              </>
            );
          default:
            return null;
        }
      })}
      {component.type !== 'Form' && (
        <ConfirmButton onClick={handleSubmit}>Confirm</ConfirmButton>
      )}
    </>
  );
};

export default EditLinks;

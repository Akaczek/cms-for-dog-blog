import { FC, FormEvent, useState, useContext } from 'react';

import {
  FixeWidthInputWrapper,
  InputLabel,
  Input,
  Form,
  FormWrapper,
  WarningMessage
} from '../../../../../shared/Form';
import { ConfirmButton } from '../../../../../shared/Buttons';
import { GalleriesContext } from '../../../../../lib/context/galleriesContext';
import { IAddEditGalleryProps } from './AddEditGallery.types';

const AddEditGallery: FC<IAddEditGalleryProps> = ({
  gallery,
  onClose,
  isEdit,
}) => {
  const [warning, setWarning] = useState('');
  const [title, setTitle] = useState(gallery?.title || '');
  const { addGallery, editGallery } = useContext(GalleriesContext);

  const handleAddGallery = async () => {
    await addGallery(title);
    onClose();
  };

  const handleEditGallery = async () => {
    await editGallery(gallery.id, title);
    onClose();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (title.length === 0) {
      setWarning('Title cannot be empty');
      return;
    }
    if (isEdit) {
      await handleEditGallery();
    } else {
      await handleAddGallery();
    }
    setWarning('');
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        {warning && <WarningMessage>{warning}</WarningMessage>}
        <FixeWidthInputWrapper>
          <InputLabel htmlFor='title'>Title</InputLabel>
          <Input
            id='title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FixeWidthInputWrapper>
        <ConfirmButton type='submit'>{
          isEdit ? 'Edit gallery' : 'Add gallery'
        }</ConfirmButton>
      </Form>
    </FormWrapper>
  );
};

export default AddEditGallery;

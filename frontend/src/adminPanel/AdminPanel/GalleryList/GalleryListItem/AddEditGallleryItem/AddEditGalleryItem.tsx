import { FC, FormEvent, useState, useContext, useEffect } from 'react';

import {
  FixeWidthInputWrapper,
  InputLabel,
  Input,
  Form,
  FormWrapper,
  WarningMessage,
} from '../../../../../shared/Form';
import { ConfirmButton } from '../../../../../shared/Buttons';
import { IAddEditGalleryItemProps } from './AddEditGalleryItem.types';
import { GalleriesContext } from '../../../../../lib/context/galleriesContext';

const AddEditGallery: FC<IAddEditGalleryItemProps> = ({
  galleryItem,
  gallery,
  isEdit,
  onClose,
}) => {
  const [warning, setWarning] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [path, setPath] = useState('');
  const [buttonContent, setButtonContent] = useState('');

  useEffect(() => {
    setTitle(galleryItem?.title || '');
    setContent(galleryItem?.content || '');
    setPath(galleryItem?.path || '');
    setButtonContent(galleryItem?.buttonContent || '');
  }, [galleryItem]);

  const { addItemToGallery, editItemInGallery } = useContext(GalleriesContext);

  const handleAddGalleryItem = async () => {
    const image = (
      document.getElementById('galleryItemImageId') as HTMLInputElement
    )?.files?.[0];

    if (image === undefined) {
      setWarning('Image is required');
      return;
    }

    setWarning('');

    await addItemToGallery(
      gallery.id,
      {
        title,
        content,
        path,
        buttonContent,
      },
      image
    );
    onClose();
  };

  const handleEditGalleryItem = async () => {
    const image = (
      document.getElementById('galleryItemImageId') as HTMLInputElement
    )?.files?.[0];

    if (!image) {
      setWarning('Image is required');
      return;
    }

    setWarning('');
    await editItemInGallery(
      gallery.id,
      galleryItem.id,
      {
        title,
        content,
        path,
        buttonContent,
      },
      image
    );
    onClose();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isEdit) {
      await handleEditGalleryItem();
    } else {
      await handleAddGalleryItem();
    }
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
        <FixeWidthInputWrapper>
          <InputLabel htmlFor='content'>Content</InputLabel>
          <Input
            id='content'
            type='text'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </FixeWidthInputWrapper>
        <FixeWidthInputWrapper>
          <InputLabel htmlFor='path'>Path</InputLabel>
          <Input
            id='path'
            type='text'
            value={path}
            onChange={(e) => setPath(e.target.value)}
          />
        </FixeWidthInputWrapper>
        <FixeWidthInputWrapper>
          <InputLabel htmlFor='buttonContent'>Button content</InputLabel>
          <Input
            id='buttonContent'
            type='text'
            value={buttonContent}
            onChange={(e) => setButtonContent(e.target.value)}
          />
        </FixeWidthInputWrapper>
        <FixeWidthInputWrapper>
          <InputLabel htmlFor='image'>Image</InputLabel>
          <Input id='galleryItemImageId' type='file' accept='.jpg,.jpeg,.png' />
        </FixeWidthInputWrapper>
        <ConfirmButton type='submit'>Add</ConfirmButton>
      </Form>
    </FormWrapper>
  );
};

export default AddEditGallery;

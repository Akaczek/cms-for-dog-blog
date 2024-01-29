import { FC, useState, useContext, useEffect } from 'react';

import { whatCanBeEdited } from '../../../../../lib/constants';
import { IEditComponentProps } from './EditComponent.types';
import {
  EditInputLabel,
  EditInput,
  EditInputTextarea,
  EditInputSelect,
  InfoText,
} from './EditComponent.styles';
import { Gallery } from '../../../../../lib/types';
import { GalleriesContext } from '../../../../../lib/context/galleriesContext';
import { EditComponentContext } from '../../../../../lib/context/editComponentContext';
import { DogsContext } from '../../../../../lib/context/dogsContext';
import { ConfirmButton } from '../../../../../shared/Buttons';

const EditComponent: FC<IEditComponentProps> = ({ component }) => {
  const [title, setTitle] = useState(component.title);
  const [imagePosition, setImagePosition] = useState(component.imagePosition);
  const [content, setContent] = useState(component.content);
  const [path, setPath] = useState(component.path);
  const [buttonContent, setButtonContent] = useState(component.buttonContent);
  const [dog, setDog] = useState(component.dog);
  const [gallery, setGallery] = useState(component.gallery);

  const { updateComponent } = useContext(EditComponentContext);
  const { galleries } = useContext(GalleriesContext);
  const { dogs } = useContext(DogsContext);

  useEffect(() => {
    setTitle(component.title);
    setImagePosition(component.imagePosition);
    setContent(component.content);
    setPath(component.path);
    setButtonContent(component.buttonContent);
    setDog(component.dog);
    setGallery(component.gallery);
  }, [component]);

  const handleSubmit = async () => {
    const image = (
      document.getElementById('editComponentImage') as HTMLInputElement
    )?.files?.[0];
    const componentToEdit = {
      title,
      imagePosition,
      content,
      path,
      buttonContent,
      dogId: dog?.id || null,
      galleryId: gallery?.id || null,
    };
    await updateComponent(componentToEdit, image);
  };

  return (
    <>
      {whatCanBeEdited[component.type].map((property) => {
        switch (property) {
          case 'title':
            return (
              <>
                <EditInputLabel htmlFor='title'>Title</EditInputLabel>
                <EditInput
                  id='title'
                  type='text'
                  value={title ?? ''}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </>
            );
          case 'imagePosition':
            return (
              <>
                <EditInputLabel htmlFor='imagePosition'>
                  Image position
                </EditInputLabel>
                <EditInputSelect
                  id='imagePosition'
                  value={imagePosition ?? undefined}
                  onChange={(e) => setImagePosition(e.target.value)}
                >
                  <option value=''>--Select Image Position--</option>
                  <option value='left'>Left</option>
                  <option value='right'>Right</option>
                  <option value='top'>Top</option>
                  <option value='bottom'>Bottom</option>
                </EditInputSelect>
              </>
            );
          case 'content':
            return (
              <>
                <EditInputLabel htmlFor='content'>Content</EditInputLabel>
                <EditInputTextarea
                  id='content'
                  value={content ?? ''}
                  onChange={(e) => setContent(e.target.value)}
                />
              </>
            );
          case 'path':
            return (
              <>
                <EditInputLabel htmlFor='path'>Path</EditInputLabel>
                <EditInput
                  id='path'
                  type='text'
                  value={path ?? ''}
                  onChange={(e) => setPath(e.target.value)}
                />
              </>
            );
          case 'buttonContent':
            return (
              <>
                <EditInputLabel htmlFor='buttonContent'>
                  Button content
                </EditInputLabel>
                <EditInput
                  id='buttonContent'
                  type='text'
                  value={buttonContent ?? ''}
                  onChange={(e) => setButtonContent(e.target.value)}
                />
              </>
            );
          case 'galleryId':
            return (
              <>
                <EditInputLabel htmlFor='galleryId'>Gallery</EditInputLabel>
                {galleries.length === 0 ? (
                  <InfoText>
                    You need to add at least one gallery to be able to add
                    gallery component
                  </InfoText>
                ) : (
                  <EditInputSelect
                    id='galleryId'
                    value={gallery?.id ?? undefined}
                    onChange={(e) =>
                      setGallery(
                        galleries.find(
                          (g: Gallery) => g.id === parseInt(e.target.value)
                        )
                      )
                    }
                  >
                    <option value=''>--Select Gallery--</option>
                    {galleries.map((g) => (
                      <option key={g.id} value={g.id}>
                        {g.title}
                      </option>
                    ))}
                  </EditInputSelect>
                )}
              </>
            );
          case 'dogId':
            return (
              <>
                <EditInputLabel htmlFor='dogId'>Dog</EditInputLabel>
                {dogs.length === 0 ? (
                  <InfoText>
                    You need to add at least one dog to be able to add dog item
                    component
                  </InfoText>
                ) : (
                  <EditInputSelect
                    id='dogId'
                    value={dog?.id ?? undefined}
                    onChange={(e) =>
                      setDog(
                        dogs.find((d) => d.id === parseInt(e.target.value))
                      )
                    }
                  >
                    <option value=''>--Select Dog--</option>
                    {dogs.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name}
                      </option>
                    ))}
                  </EditInputSelect>
                )}
              </>
            );
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

export default EditComponent;

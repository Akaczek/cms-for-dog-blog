import { FC, FormEvent, useState, useContext } from 'react';

import {
  FormWrapper,
  Form,
  InputLabel,
  Select,
  WarningMessage,
  FixeWidthInputWrapper,
} from '../../../../shared/Form';
import { ConfirmButton } from '../../../../shared/Buttons';
import { PagesContext } from '../../../../lib/context/pagesContext';
import { IAddComponentProps } from './AddComponent.types';
import { ComponentType } from '../../../../lib/types/Component';
import { addableComponentsTypes } from '../../../../lib/constants';

export const AddComponent: FC<IAddComponentProps> = ({pageId, order, toggle}) => {
  const [componentType, setComponentType] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  const { addComponent } = useContext(PagesContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (componentType === '') {
      setWarningMessage('Please select component type');
      return;
    }
    await addComponent(pageId, componentType as ComponentType, order);
    toggle();
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        {warningMessage && <WarningMessage>{warningMessage}</WarningMessage>}
        <FixeWidthInputWrapper>
          <InputLabel>Component type</InputLabel>
          <Select
            value={componentType}
            onChange={(e) => setComponentType(e.target.value)}
          >
            <option value="">Select component type</option>
            <option value={addableComponentsTypes.DogItem}>Dog item</option>
            <option value={addableComponentsTypes.Form}>Form</option>
            <option value={addableComponentsTypes.Gallery}>Gallery</option>
            <option value={addableComponentsTypes.HeroBanner}>Hero banner</option>
            <option value={addableComponentsTypes.Links}>Links</option>
            <option value={addableComponentsTypes.TextWithImage}>Text with image</option>
          </Select>
        </FixeWidthInputWrapper>
        <ConfirmButton type="submit">Add component</ConfirmButton>
      </Form>
    </FormWrapper>
  );
};

export default AddComponent;
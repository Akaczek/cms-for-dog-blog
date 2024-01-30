import { FC, FormEvent, useContext, useState } from 'react';

import { ConfigContext } from '../../../../lib/context/configContext';
import { IConfigListItemProps } from './ConfigLisItem.types';
import {
  ListItem,
  ListItemValue,
  ListItemSecondaryValue,
  ActionsWrapper,
  ListItemAction,
  ListItemActionIcon,
} from '../../../../shared/List/List.styles';
import {
  Form,
  FormWrapper,
  FixeWidthInputWrapper,
  InputLabel,
  Input,
} from '../../../../shared/Form';
import edit from '../../../../assets/icons/edit.svg';
import deleteIcon from '../../../../assets/icons/delete.svg';
import { useModal } from '../../../../lib/hooks';
import Modal from '../../../../shared/Modal';
import { WarningMessage } from '../../../../shared/Form';
import { ConfirmButton } from '../../../../shared/Buttons';
import { ConfirmationMessage } from '../../../../shared/Form';

const ConfigListItem: FC<IConfigListItemProps> = ({ item }) => {
  const { deleteConfig, updateConfig } = useContext(ConfigContext);
  const [isEditModalOpen, toggleEditModal] = useModal();
  const [isDeleteModalOpen, toggleDeleteModal] = useModal();
  const [value, setValue] = useState(item.value);
  const [description, setDescription] = useState(item.description);
  const [warningMessage, setWarningMessage] = useState('');

  const handleEditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value && description) {
      updateConfig(item.id, value, description);
      toggleEditModal();
    } else {
      setWarningMessage('All fields are required');
    }
  };

  const handleDelete = () => {
    deleteConfig(item.id);
    toggleDeleteModal();
  };

  return (
    <ListItem>
      {isEditModalOpen && (
        <Modal title='Edit config' toggle={toggleEditModal}>
          {warningMessage && <WarningMessage>{warningMessage}</WarningMessage>}
          <FormWrapper>
            <Form onSubmit={handleEditSubmit}>
              <FixeWidthInputWrapper>
                <InputLabel>Value</InputLabel>
                <Input
                  name='value'
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </FixeWidthInputWrapper>
              <FixeWidthInputWrapper>
                <InputLabel>Description</InputLabel>
                <Input
                  name='description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FixeWidthInputWrapper>
              <ConfirmButton type='submit'>Save</ConfirmButton>
            </Form>
          </FormWrapper>
        </Modal>
      )}
      {isDeleteModalOpen && (
        <Modal title='Delete config' toggle={toggleDeleteModal}>
          <ConfirmationMessage>Are you sure you want to delete this config?</ConfirmationMessage>
          <ConfirmButton onClick={handleDelete}>Delete</ConfirmButton>
        </Modal>
      )}
      <ListItemValue>{item.key}:</ListItemValue>
      <ListItemValue>{item.value}</ListItemValue>
      <ListItemSecondaryValue>{item.description}</ListItemSecondaryValue>
      <ActionsWrapper>
        <ListItemAction onClick={toggleEditModal}>
          <ListItemActionIcon src={edit} />
        </ListItemAction>
        <ListItemAction onClick={toggleDeleteModal}>
          <ListItemActionIcon src={deleteIcon} />
        </ListItemAction>
      </ActionsWrapper>
    </ListItem>
  );
};

export default ConfigListItem;

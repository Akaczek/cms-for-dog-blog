import { FC, FormEvent, useContext, useState } from 'react';

import { ConfigContext } from '../../../lib/context/configContext';
import {
  List,
  ListHeader,
  ListItemAction,
  ListItemActionIcon,
  ListWrapper,
} from '../../../shared/List/List.styles';
import {
  Form,
  FormWrapper,
  FixeWidthInputWrapper,
  InputLabel,
  Input,
} from '../../../shared/Form';
import { ConfirmButton } from '../../../shared/Buttons';
import { MainViewWrapper } from '../AdminPanel.styles';
import add from '../../../assets/icons/add.svg';
import Modal from '../../../shared/Modal';
import { useModal } from '../../../lib/hooks';
import ConfigListItem from './ConfigListItem';
import { WarningMessage } from '../../../shared/Form';

const ConfigList: FC = () => {
  const { config, addConfig } = useContext(ConfigContext);
  const [isAddModalOpen, toggleAddModal] = useModal();
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  const handleAddSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (key && value && description) {
      addConfig(key, value, description);
      toggleAddModal();
      setKey('');
      setValue('');
      setDescription('');
    } else {
      setWarningMessage('All fields are required');
    }
  };

  return (
    <MainViewWrapper>
      {isAddModalOpen && (
        <Modal title='Add config' toggle={toggleAddModal}>
          {warningMessage && <WarningMessage>{warningMessage}</WarningMessage>}
          <FormWrapper>
            <Form onSubmit={handleAddSubmit}>
              <FixeWidthInputWrapper>
                <InputLabel>Key</InputLabel>
                <Input
                  name='key'
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                />
              </FixeWidthInputWrapper>
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
              <ConfirmButton type='submit'>Add</ConfirmButton>
            </Form>
          </FormWrapper>
        </Modal>
      )}
      <ListWrapper>
        <ListHeader>Config</ListHeader>
        <ListItemAction onClick={toggleAddModal}>
          <ListItemActionIcon src={add} />
        </ListItemAction>
        <List>
          {config?.map((item) => (
            <ConfigListItem key={item.id} item={item} />
          ))}
        </List>
      </ListWrapper>
    </MainViewWrapper>
  );
};

export default ConfigList;

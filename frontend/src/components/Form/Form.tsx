import { FC, useContext, useState } from 'react';

import {
  FormContainer,
  UserInfoInput,
  UserInfoTextArea,
  UserInfoWrapper,
  FormButton,
  FormTitle,
} from './Form.styles';
import { MessagesContext } from '../../lib/context/messagesContext';
import { WarningMessage } from '../../shared/Form';

const Form: FC = () => {
  const { addMessage } = useContext(MessagesContext);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  const handleAddMessage = () => {
    if (name && message) {
      addMessage({ name, phone, email, message });
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    } else {
      setWarningMessage('Name and message are required');
    }
  };

  return (
    <FormContainer>
      <FormTitle>Contact Form</FormTitle>
      {warningMessage && <WarningMessage>{warningMessage}</WarningMessage>}
      <UserInfoWrapper>
        <UserInfoInput
          placeholder='NAME'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <UserInfoInput
          placeholder='PHONE'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <UserInfoInput
          placeholder='EMAIL'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </UserInfoWrapper>
      <UserInfoTextArea
        placeholder='MESSAGE'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <FormButton onClick={handleAddMessage}>Send</FormButton>
    </FormContainer>
  );
};

export default Form;

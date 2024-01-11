import { FC } from 'react';

import {
  FormContainer,
  UserInfoInput,
  UserInfoTextArea,
  UserInfoWrapper,
  FormButton,
  FormTitle,
} from './Form.styles';

const Form: FC = () => {
  return (
    <FormContainer>
      <FormTitle>Contact Form</FormTitle>
      <UserInfoWrapper>
        <UserInfoInput placeholder='NAME' />
        <UserInfoInput placeholder='PHONE' />
        <UserInfoInput placeholder='EMAIL' />
      </UserInfoWrapper>
      <UserInfoTextArea placeholder='MESSAGE' />
      <FormButton>Send</FormButton>
    </FormContainer>
  );
};

export default Form;

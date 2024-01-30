import { FC, FormEvent, useState, useContext } from 'react';

import {
  FormWrapper,
  Form,
  InputLabel,
  Input,
  Select,
  WarningMessage,
  FixeWidthInputWrapper,
} from '../../../../shared/Form';
import { ConfirmButton } from '../../../../shared/Buttons';
import { UsersContext } from '../../../../lib/context/usersContext';
import { IAddUserProps } from './AddUser.types';

const AddUser: FC<IAddUserProps> = ({ onClose }) => {
  const { addUser } = useContext(UsersContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [warning, setWarning] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setWarning('Please fill all fields');
      return;
    }
    await addUser({ name, email, role }, password);
    onClose();
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        {warning && <WarningMessage>{warning}</WarningMessage>}
        <input
          autoComplete='false'
          name='hidden'
          type='text'
          style={{ display: 'none' }}
        />
        <FixeWidthInputWrapper>
          <InputLabel htmlFor='name'>Name</InputLabel>
          <Input
            id='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FixeWidthInputWrapper>
        <FixeWidthInputWrapper>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <Input
            id='email'
            type='email'
            value={email}
            autoComplete='off'
            onChange={(e) => setEmail(e.target.value)}
          />
        </FixeWidthInputWrapper>
        <FixeWidthInputWrapper>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <Input
            id='password'
            type='password'
            value={password}
            autoComplete='new-password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </FixeWidthInputWrapper>
        <FixeWidthInputWrapper>
          <InputLabel htmlFor='role'>Role</InputLabel>
          <Select
            id='role'
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value='user'>User</option>
            <option value='admin'>Admin</option>
          </Select>
        </FixeWidthInputWrapper>
        <ConfirmButton type='submit'>Add</ConfirmButton>
      </Form>
    </FormWrapper>
  );
};

export default AddUser;

import { FC, FormEvent, useState, useContext } from 'react';

import {
  FormWrapper,
  Form,
  InputLabel,
  Select,
  FixeWidthInputWrapper,
} from '../../../../shared/Form';
import { ConfirmButton } from '../../../../shared/Buttons';
import { UsersContext } from '../../../../lib/context/usersContext';
import { IEditUserRoleProps } from './EditUserRole.types';

const EditUserRole: FC<IEditUserRoleProps> = ({ user, onClose }) => {
  const { editUserRole } = useContext(UsersContext);
  const [role, setRole] = useState(user.role);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await editUserRole(user.id, role);
    onClose();
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
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
        <ConfirmButton type='submit'>Save</ConfirmButton>
      </Form>
    </FormWrapper>
  );
};

export default EditUserRole;

import { FC, FormEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  LeftSidePanelWrapper,
  LogOutButton,
  LeftSidePanelLinks,
  LeftSidePanelLinkIcon,
  LeftSidePanelLink,
  LeftSidePanelLinkLogo,
  ChangePasswordButton,
} from './LeftSidePanel.styles';
import { AuthContext } from '../../../lib/context/authContext';
import dogPaw from '../../../assets/paw.svg';
import pages from '../../../assets/icons/pages.svg';
import dog from '../../../assets/icons/dog.svg';
import users from '../../../assets/icons/users.svg';
import logo from '../../../assets/logo.png';
import gallery from '../../../assets/icons/gallery.svg';
import settings from '../../../assets/icons/settings.svg';
import message from '../../../assets/icons/message.svg';
import { WarningMessage } from '../../../shared/Form';
import { ConfirmButton } from '../../../shared/Buttons';
import Modal from '../../../shared/Modal';
import { useModal } from '../../../lib/hooks';
import { FormWrapper, Form, FixeWidthInputWrapper, InputLabel, Input } from '../../../shared/Form';

const LeftSidePanel: FC = () => {
  const { user, logout, updatePassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isModalOpen, toggleModal] = useModal();
  const [warning, setWarning] = useState('');

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!oldPassword || !newPassword) {
      setWarning('Please fill all fields');
      return;
    }
    await updatePassword(user.id, oldPassword, newPassword);
    toggleModal();
  };

  return (
    <LeftSidePanelWrapper>
      {isModalOpen && (
        <Modal title='Change Password' toggle={toggleModal}>
          <FormWrapper>
            <Form onSubmit={handleSubmit}>
              {warning && <WarningMessage>{warning}</WarningMessage>}
              <FixeWidthInputWrapper>
                <InputLabel htmlFor='oldPassword'>Old password</InputLabel>
                <Input
                  id='oldPassword'
                  type='password'
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </FixeWidthInputWrapper>
              <FixeWidthInputWrapper>
                <InputLabel htmlFor='newPassword'>New password</InputLabel>
                <Input
                  id='newPassword'
                  type='password'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </FixeWidthInputWrapper>
              <ConfirmButton type='submit'>Confirm</ConfirmButton>
            </Form>
          </FormWrapper>
        </Modal>
      )}
      <LeftSidePanelLinks>
        <LeftSidePanelLink to='/admin'>
          <LeftSidePanelLinkIcon src={dogPaw} />
        </LeftSidePanelLink>
        <LeftSidePanelLink to='/'>
          <LeftSidePanelLinkLogo src={logo} />
        </LeftSidePanelLink>
        <LeftSidePanelLink to='/admin/pagesListAdmin'>
          <LeftSidePanelLinkIcon src={pages} />
        </LeftSidePanelLink>
        <LeftSidePanelLink to='/admin/dogsListAdmin'>
          <LeftSidePanelLinkIcon src={dog} />
        </LeftSidePanelLink>
        <LeftSidePanelLink to='/admin/galleryListAdmin'>
          <LeftSidePanelLinkIcon src={gallery} />
        </LeftSidePanelLink>
        <LeftSidePanelLink to='/admin/configListAdmin'>
          <LeftSidePanelLinkIcon src={settings} />
        </LeftSidePanelLink>
        <LeftSidePanelLink to='/admin/messagesListAdmin'>
          <LeftSidePanelLinkIcon src={message} />
        </LeftSidePanelLink>
        {(user?.role === 'admin' || user?.role === 'superadmin') && (
          <LeftSidePanelLink to='/admin/usersListAdmin'>
            <LeftSidePanelLinkIcon src={users} />
          </LeftSidePanelLink>
        )}
      </LeftSidePanelLinks>
      <ChangePasswordButton onClick={toggleModal}>Change password</ChangePasswordButton>
      <LogOutButton onClick={handleLogout}>Log out</LogOutButton>
    </LeftSidePanelWrapper>
  );
};

export default LeftSidePanel;

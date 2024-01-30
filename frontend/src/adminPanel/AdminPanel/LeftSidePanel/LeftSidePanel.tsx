import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  LeftSidePanelWrapper,
  LogOutButton,
  LeftSidePanelLinks,
  LeftSidePanelLinkIcon,
  LeftSidePanelLink,
  LeftSidePanelLinkLogo,
} from './LeftSidePanel.styles';
import { AuthContext } from '../../../lib/context/authContext';
import dogPaw from '../../../assets/paw.svg';
import pages from '../../../assets/icons/pages.svg';
import dog from '../../../assets/icons/dog.svg';
import users from '../../../assets/icons/users.svg';
import logo from '../../../assets/logo.png';
import gallery from '../../../assets/icons/gallery.svg';
import settings from '../../../assets/icons/settings.svg';

const LeftSidePanel: FC = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <LeftSidePanelWrapper>
      <LeftSidePanelLinks>
        <LeftSidePanelLink to='/admin'>
          <LeftSidePanelLinkIcon src={dogPaw}/>
        </LeftSidePanelLink>
        <LeftSidePanelLink to='/'>
          <LeftSidePanelLinkLogo src={logo}/>
        </LeftSidePanelLink>
        <LeftSidePanelLink to='/admin/pagesListAdmin'>
          <LeftSidePanelLinkIcon src={pages}/>
        </LeftSidePanelLink>
        <LeftSidePanelLink to='/admin/dogsListAdmin'>
          <LeftSidePanelLinkIcon src={dog}/>
        </LeftSidePanelLink>
        <LeftSidePanelLink to='/admin/galleryListAdmin'>
          <LeftSidePanelLinkIcon src={gallery}/>
        </LeftSidePanelLink>
        <LeftSidePanelLink to='/admin/configListAdmin'>
          <LeftSidePanelLinkIcon src={settings}/>
        </LeftSidePanelLink>
        {(user?.role === 'admin' || user?.role === 'superadmin') && (
          <LeftSidePanelLink to='/admin/usersListAdmin'>
            <LeftSidePanelLinkIcon src={users}/>
          </LeftSidePanelLink>
        )}
      </LeftSidePanelLinks>
      <LogOutButton onClick={handleLogout}>Log out</LogOutButton>
    </LeftSidePanelWrapper>
  );
};

export default LeftSidePanel;

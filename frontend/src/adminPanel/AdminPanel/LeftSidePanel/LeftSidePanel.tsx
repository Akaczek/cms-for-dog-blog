import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  LeftSidePanelWrapper,
  LogOutButton,
  LeftSidePanelLinks,
  LeftSidePanelLinkIcon,
  LeftSidePanelLink
} from './LeftSidePanel.styles';
import { AuthContext } from '../../../lib/context/authContext';
import dogPaw from '../../../assets/paw.svg';
import pages from '../../../assets/icons/pages.svg';

const LeftSidePanel: FC = () => {
  const { logout } = useContext(AuthContext);
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
        <LeftSidePanelLink to='/admin/pages'>
          <LeftSidePanelLinkIcon src={pages}/>
        </LeftSidePanelLink>
      </LeftSidePanelLinks>
      <LogOutButton onClick={handleLogout}>Log out</LogOutButton>
    </LeftSidePanelWrapper>
  );
};

export default LeftSidePanel;

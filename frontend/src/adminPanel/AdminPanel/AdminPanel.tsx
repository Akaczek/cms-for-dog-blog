import { FC, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { LogOutButton } from './AdminPanel.styles';
import { AuthContext } from '../../lib/context/authContext';
import getLoggedUser from '../../lib/network/getLoggedUser';

const AdminPanel: FC = () => {
  const { user, setUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const loggedUser = await getLoggedUser();
      if (loggedUser) {
        setUser(loggedUser);
      } else {
        navigate('/login');
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <>
      <p>Admin Panel {user?.name ?? ''}</p>
      <LogOutButton onClick={handleLogout}>Log out</LogOutButton>
    </>
  );
};

export default AdminPanel;

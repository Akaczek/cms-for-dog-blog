import { FC, useContext, useEffect } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../../lib/context/authContext';
import getLoggedUser from '../../lib/network/getLoggedUser';
import LeftSidePanel from './LeftSidePanel';
import PagesList from './PagesList';
import { AdminPanelWrapper, MainViewWrapper } from './AdminPanel.styles';

const AdminPanel: FC = () => {
  const { user, setUser } = useContext(AuthContext);
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

  return (
    <AdminPanelWrapper>
      <LeftSidePanel />
      <Routes>
        <Route path='pages' element={<PagesList />} />
        <Route path='/' element={
          <MainViewWrapper>
            <h1>Admin Panel</h1>
            <p>Welcome {user?.email}</p>
          </MainViewWrapper>
        } />
      </Routes>
    </AdminPanelWrapper>
  );
};

export default AdminPanel;

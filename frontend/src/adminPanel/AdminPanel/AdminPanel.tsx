import { FC, useContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../lib/context/authContext';
import { PagesContext } from '../../lib/context/pagesContext';
import getLoggedUser from '../../lib/network/getLoggedUser';
import { Page } from '../../lib/types';
import { AdminPanelWrapper, MainViewWrapper } from './AdminPanel.styles';
import LeftSidePanel from './LeftSidePanel';
import PagesList from './PagesList';
import Content from './Content';

const AdminPanel: FC = () => {
  const { user, setUser } = useContext(AuthContext);
  const { pages, getPages } = useContext(PagesContext);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      const loggedUser = await getLoggedUser();
      if (loggedUser) {
        setUser(loggedUser);
        getPages();
      } else {
        navigate('/login');
      }
    };
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const path = location.pathname.replace('/admin', '');
    if (path === '') {
      setSelectedPage(pages.find((page) => page.path === '/'));
    } else {
      setSelectedPage(pages.find((page) => page.path === location.pathname.replace('/admin', '')));
    }
  }, [pages, location]);

  useEffect(() => {
    console.log(selectedPage);
  }, [selectedPage]);

  return (
    <AdminPanelWrapper>
      <LeftSidePanel />
      <MainViewWrapper>
        <Routes>
          <Route path='pages' element={<PagesList />} />
          <Route path='*' element={<Content page={selectedPage}/>} />
        </Routes>
      </MainViewWrapper>
    </AdminPanelWrapper>
  );
};

export default AdminPanel;

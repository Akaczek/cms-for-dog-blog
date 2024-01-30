import { FC, useContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../lib/context/authContext';
import { DogsContext } from '../../lib/context/dogsContext';
import { PagesContext } from '../../lib/context/pagesContext';
import { UsersContext } from '../../lib/context/usersContext';
import { GalleriesContext } from '../../lib/context/galleriesContext';
import { EditComponentContext } from '../../lib/context/editComponentContext';
import { ConfigContext } from '../../lib/context/configContext';
import getLoggedUser from '../../lib/network/getLoggedUser';
import { Page } from '../../lib/types';
import { AdminPanelWrapper } from './AdminPanel.styles';
import Content from './Content';
import DogsList from './DogsList';
import LeftSidePanel from './LeftSidePanel';
import PagesList from './PagesList';
import UsersList from './UsersList';
import EditPanel from './Content/EditPanel';
import GalleryList from './GalleryList';
import ConfigList from './ConfigList/ConfigList';

const AdminPanel: FC = () => {
  const { setUser } = useContext(AuthContext);
  const { pages, getPages } = useContext(PagesContext);
  const { getDogs } = useContext(DogsContext);
  const { getUsers } = useContext(UsersContext);
  const { getGalleries } = useContext(GalleriesContext);
  const { setComponent } = useContext(EditComponentContext);
  const { getConfig } = useContext(ConfigContext);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchUser = async () => {
      const loggedUser = await getLoggedUser();
      if (loggedUser) {
        setUser(loggedUser);
        getPages();
        getDogs();
        getGalleries();
        getConfig();
        if (loggedUser.role !== 'user') {
          getUsers();
        }
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
      setSelectedPage(
        pages.find(
          (page) => page.path === location.pathname.replace('/admin', '')
        )
      );
    }
    setComponent(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages, location]);

  return (
    <AdminPanelWrapper>
      <LeftSidePanel />
      <Routes>
        <Route path='dogsListAdmin' element={<DogsList />} />
        <Route path='pagesListAdmin' element={<PagesList />} />
        <Route path='usersListAdmin' element={<UsersList />} />
        <Route path='galleryListAdmin' element={<GalleryList />} />
        <Route path='configListAdmin' element={<ConfigList />} />
        <Route
          path='*'
          element={
            <>
              <Content page={selectedPage} />
              <EditPanel />
            </>
          }
        />
      </Routes>
    </AdminPanelWrapper>
  );
};

export default AdminPanel;

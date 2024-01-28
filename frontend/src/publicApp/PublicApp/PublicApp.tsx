import { FC, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Footer, Header } from '../../components';
import { PagesContext } from '../../lib/context/pagesContext';
import { Page } from '../../lib/types';
import {
  ContentWrapper,
  NotFoundText,
  NotFoundWrapper,
} from './PublicApp.styles';
import PublicComponent from './PublicComponent';

const PublicApp: FC = () => {
  const { pages, getPages } = useContext(PagesContext);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const location = useLocation();

  useEffect(() => {
    getPages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const path = location.pathname;
    const page = pages.find((page) => page.path === path);
    setSelectedPage(page);
  }, [pages, location]);

  return (
    <>
      {selectedPage ? (
        <>
          <Header />
          <ContentWrapper>
            {selectedPage.components.map((component) => {
              return <PublicComponent component={component} />;
            })}
          </ContentWrapper>
          <Footer />
        </>
      ) : (
        <NotFoundWrapper>
          <NotFoundText>404 - Page not found</NotFoundText>
        </NotFoundWrapper>
      )}
    </>
  );
};

export default PublicApp;

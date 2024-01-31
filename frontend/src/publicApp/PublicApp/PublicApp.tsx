import { FC, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Footer, Header } from '../../components';
import { PagesContext } from '../../lib/context/pagesContext';
import { ConfigContext } from '../../lib/context/configContext';
import { Page } from '../../lib/types';
import {
  ContentWrapper,
  PublicAppWrapper,
} from './PublicApp.styles';
import PublicComponent from './PublicComponent';

const PublicApp: FC = () => {
  const { pages, getPages } = useContext(PagesContext);
  const { getConfig } = useContext(ConfigContext);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const location = useLocation();

  useEffect(() => {
    getPages();
    getConfig();
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
        <PublicAppWrapper>
          <Header />
          <ContentWrapper>
            {selectedPage.components.sort(
              (a,b) => a.order - b.order
            ).map((component) => {
              return <PublicComponent component={component} />;
            })}
          </ContentWrapper>
          <Footer />
        </PublicAppWrapper>
      ) : (
        null
      )}
    </>
  );
};

export default PublicApp;

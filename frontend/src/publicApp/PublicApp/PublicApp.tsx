import { FC } from 'react';

import { Header, Footer, HeroBanner } from '../../components';
import { ContentWrapper } from './PublicApp.styles';

const PublicApp: FC = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <HeroBanner />
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default PublicApp;

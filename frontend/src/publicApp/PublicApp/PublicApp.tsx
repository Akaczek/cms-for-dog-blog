import { FC } from 'react';

import { Header, Footer, HeroBanner, Text } from '../../components';
import { ContentWrapper } from './PublicApp.styles';

const PublicApp: FC = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <HeroBanner />
        <Text />
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default PublicApp;

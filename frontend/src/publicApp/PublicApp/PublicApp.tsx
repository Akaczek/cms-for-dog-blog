import { FC } from 'react';

import { Header, Footer, HeroBanner, Text, DogItem } from '../../components';
import { ContentWrapper } from './PublicApp.styles';

const PublicApp: FC = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <DogItem />
        <HeroBanner />
        <Text />
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default PublicApp;

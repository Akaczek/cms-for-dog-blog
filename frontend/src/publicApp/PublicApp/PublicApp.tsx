import { FC } from 'react';

import { DogItem, Footer, Gallery, Header, HeroBanner, Text, Form } from '../../components';
import { ContentWrapper } from './PublicApp.styles';

const PublicApp: FC = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Form />
        <Gallery />
        <DogItem />
        <HeroBanner />
        <Text />
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default PublicApp;

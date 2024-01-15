import { FC } from 'react';

import {
  DogItem,
  Footer,
  Gallery,
  Header,
  HeroBanner,
  Links,
  Text,
  Form,
} from '../../components';
import { ContentWrapper } from './PublicApp.styles';

const PublicApp: FC = () => {
  return (
    <>
      <Header />
      <ContentWrapper>
        <Links />
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

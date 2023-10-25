import { FC } from 'react';

import { Header, Footer } from '../../components';
import { ContentWrapper } from './PublicApp.styles';

const PublicApp: FC = () => {
  return (
    <>
      <Header />
      <ContentWrapper></ContentWrapper>
      <Footer />
    </>
  );
};

export default PublicApp;

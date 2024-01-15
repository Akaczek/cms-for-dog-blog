import { FC } from 'react';

import {
  LinksContainer,
  Image,
  TitleAndLinksWrapper,
  Title,
  LinksWrapper,
  Link,
  LinkIcon,
  LinkIconWrapper,
} from './Links.styles';
import dogPaw from '../../assets/paw.svg';
import { arrow_right } from '../../assets/icons';

const mockedLinks = [
  {
    id: 1,
    title: 'Link 1',
    url: 'https://www.google.com',
  },
  {
    id: 2,
    title: 'Link 2',
    url: 'https://www.google.com',
  },
  {
    id: 3,
    title: 'Link 3',
    url: 'https://www.google.com',
  },
  {
    id: 4,
    title: 'Link 4',
    url: 'https://www.google.com',
  },
  {
    id: 5,
    title: 'Link 5',
    url: 'https://www.google.com',
  },
  {
    id: 6,
    title: 'Link 6',
    url: 'https://www.google.com',
  },
];

const Links: FC = () => {
  return (
    <LinksContainer>
      <Image src={dogPaw} />
      <TitleAndLinksWrapper>
        <Title>Links</Title>
        <LinksWrapper>
          {mockedLinks.map((link) => (
            <LinkIconWrapper key={link.id}>
              <LinkIcon src={arrow_right} />
              <Link key={link.id} href={link.url}>
                {link.title}
              </Link>
            </LinkIconWrapper>
          ))}
        </LinksWrapper>
      </TitleAndLinksWrapper>
    </LinksContainer>
  );
};

export default Links;

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
import { IComponentProps } from '../components.types';
import { backendURL } from '../../lib/constants';

const Links: FC<IComponentProps> = ({ component }) => {
  const imageLink = `${backendURL}/images/${component?.imageUrl ?? dogPaw}`;
  const links = component?.links || [];

  return (
    <LinksContainer>
      <Image
        src={imageLink}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = dogPaw;
        }}
      />
      <TitleAndLinksWrapper>
        <Title>Links</Title>
        <LinksWrapper>
          {links.map((link) => (
            <LinkIconWrapper key={link.id}>
              <LinkIcon src={arrow_right} />
              <Link key={link.id} href={link.path}>
                {link.text}
              </Link>
            </LinkIconWrapper>
          ))}
        </LinksWrapper>
      </TitleAndLinksWrapper>
    </LinksContainer>
  );
};

export default Links;

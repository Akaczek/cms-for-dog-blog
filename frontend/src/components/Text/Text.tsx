import { FC } from 'react';

import dogPaw from '../../assets/paw.svg';
import {
  TextWrapper,
  Image,
  TextAndButtonWrapper,
  Header,
  Paragraph,
  Button,
} from './Text.styles';
import { ImagePosition } from './Text.types';
import { IComponentProps } from '../components.types';
import { backendURL } from '../../lib/constants';

const Text: FC<IComponentProps> = ({ component }) => {
  const imagePosition = component?.imagePosition || 'left';
  const imageLink = `${backendURL}/images/${component?.imageUrl ?? dogPaw}`;

  return (
    <TextWrapper $imagePosition={imagePosition as ImagePosition}>
      {component?.imageUrl && (
        <Image
          src={imageLink}
          alt='dog'
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = dogPaw;
          }}
        />
      )}
      <TextAndButtonWrapper>
        <Header>{component?.title || ''}</Header>
        <Paragraph>
          {component?.content ||
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel libero quis lacus hendrerit mattis. Nullam sit amet eros sit amet ligula ultricies ultrices. '}
        </Paragraph>
        {component?.buttonContent && (
          <Button href={component?.path || ''}>
            {component?.buttonContent}
          </Button>
        )}
      </TextAndButtonWrapper>
    </TextWrapper>
  );
};

export default Text;

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

const Text: FC = () => {
  return (
    <TextWrapper $imagePosition={'left' as ImagePosition}>
      <Image src={dogPaw} alt='dog' />
      <TextAndButtonWrapper>
        <Header>Some header</Header>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
          magna et erat dapibus dapibus. Quisque sem eros, rutrum nec tincidunt
          non, hendrerit id velit. Duis sodales quam ut leo feugiat dictum. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Mauris ac faucibus velit. Quisque eget viverra justo,
          nec vestibulum enim. Nullam efficitur erat in tellus iaculis accumsan.
          Suspendisse egestas arcu ante, in rhoncus lacus facilisis eu. Quisque
          molestie nibh vel laoreet ultrices. Phasellus et felis at leo maximus
          commodo. Aenean non neque massa. Cras nec ultricies eros, sed finibus
          sem. Proin lobortis lorem ut augue posuere varius. Nullam eleifend
          vitae arcu sed ornare. Curabitur libero lacus, dignissim sed sapien
          et, suscipit lobortis est.
        </Paragraph>
        <Button>Some button</Button>
      </TextAndButtonWrapper>
    </TextWrapper>
  );
};

export default Text;

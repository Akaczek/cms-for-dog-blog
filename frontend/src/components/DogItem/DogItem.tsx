import { FC } from 'react';

import {
  DogItemWrapper,
  DogName,
  DogItemDecoration,
  DogInfoAndImageWrapper,
  DogInfo,
  DogInfoItem,
  DogInfoItemTitle,
  DogInfoItemValue,
  DogImage,
} from './DogItem.styles';
import dogPaw from '../../assets/paw.svg';

const mockedDogInfo = [
  {
    title: 'Age',
    value: '2 years',
  },
  {
    title: 'Weight',
    value: '5 kg',
  },
  {
    title: 'Breed',
    value: 'Bulldog',
  },
  {
    title: 'Average lifespan',
    value: '15 to 20 years',
  },
];

const DogItem: FC = () => {
  return (
    <DogItemWrapper>
      <DogItemDecoration />
      <DogName>Bob</DogName>
      <DogInfoAndImageWrapper>
        <DogInfo>
          {mockedDogInfo.map((item) => (
            <DogInfoItem key={item.title}>
              <DogInfoItemTitle>{item.title}</DogInfoItemTitle>
              <DogInfoItemValue>{item.value}</DogInfoItemValue>
            </DogInfoItem>
          ))}
        </DogInfo>
        <DogImage src={dogPaw} alt="dog" />
      </DogInfoAndImageWrapper>
    </DogItemWrapper>
  );
};

export default DogItem;

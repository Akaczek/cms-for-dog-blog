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
import { IComponentProps } from '../components.types';
import { backendURL } from '../../lib/constants';

const DogItem: FC<IComponentProps> = ({ component }) => {
  const { dog } = component;
  const imageLink = `${backendURL}/images/${dog?.imageUrl ?? dogPaw}`;

  const dogObjects = [
    {
      title: 'Breed',
      value: dog?.breedNumber,
    },
    {
      title: 'Average lifespan',
      value: dog?.averageLifeSpan,
    },
    {
      title: 'Temperament',
      value: dog?.temperament,
    },
    {
      title: 'Weight',
      value: dog?.weight,
    },
    {
      title: 'Availability',
      value: dog?.availability,
    },
    {
      title: 'Colors',
      value: dog?.colors,
    },
    {
      title: 'Grooming',
      value: dog?.grooming,
    },
  ];

  return (
    <DogItemWrapper>
      <DogItemDecoration />
      <DogName>{dog?.name || 'Choose a dog'}</DogName>
      <DogInfoAndImageWrapper>
        <DogInfo>
          {dogObjects
            .filter((item) => item.value)
            .map((item) => (
              <DogInfoItem key={item.title}>
                <DogInfoItemTitle>{item.title}</DogInfoItemTitle>
                <DogInfoItemValue>{item.value}</DogInfoItemValue>
              </DogInfoItem>
            ))}
        </DogInfo>
        <DogImage
          src={imageLink}
          alt='dog'
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = dogPaw;
          }}
        />
      </DogInfoAndImageWrapper>
    </DogItemWrapper>
  );
};

export default DogItem;

import styled from 'styled-components';
import { device } from '../../assets/theme';

export const DogItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.lightBeige};
`;

export const DogItemDecoration = styled.div`
  width: 100px;
  height: 5px;
  background-color: ${(props) => props.theme.colors.lightBrown};
`;

export const DogName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const DogInfoAndImageWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;

  @media ${device.md} {
    flex-direction: column-reverse;
  }
`;

export const DogInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 10px;
  flex-grow: 2;
`;

export const DogInfoItem = styled.dl`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const DogInfoItemTitle = styled.dt`
  position: relative;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colors.lightBeige};
  color: ${(props) => props.theme.colors.lightBrown};
  overflow: hidden;
  width: 150px;
  z-index: 1;

  @media ${device.md} {
    width: auto;
  }

  &::after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    margin: 0;
    border-top: 1px dotted #313131;

    @media ${device.md} {
      content: ' - ';
      position: relative;
      bottom: 0;
      border-top: none;
    }
  }
`;

export const DogInfoItemValue = styled.dd`
  font-size: 16px;
  font-weight: 600;
  margin-left: 0;
`;

export const DogImage = styled.img`
  max-width: 500px;
  object-fit: cover;
  flex-grow: 1;

  @media ${device.md} {
    align-self: center;
  }
`;

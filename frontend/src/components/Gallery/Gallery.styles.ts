import styled from 'styled-components';
import { device } from '../../assets/theme';

export const GalleryWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.white};
  min-height: 200px;

  @media ${device.md} {
    padding: 20px 40px;
  }
`;

export const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  height: 500px;
  margin: 30px 0 30px 0;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  flex-grow: 1;
`;

export const GalleryItemImg = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
`;

export const GalleryItemTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0 10px 0;
`;

export const GalleryItemText = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 20px 0;
  padding: 0 10px 0 10px;
  text-align: center;
  color: ${(props) => props.theme.colors.darkGrey};
  flex-grow: 1;
  overflow: auto;
`;

export const GalleryItemButton = styled.a`
  position: relative;
  top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) => props.theme.colors.white};
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
`;

export const SwipeLeftButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -5px;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  background-color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGrey};
  }

  img {
    position: relative;
    left: 5px;
  }

  @media ${device.md} {
    left: 15px;
  }
`;

export const SwipeRightButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -5px;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  background-color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGrey};
  }

  @media ${device.md} {
    right: 15px;
  }
`;



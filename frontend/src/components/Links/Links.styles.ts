import styled from 'styled-components';
import { device } from '../../assets/theme';

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const Image = styled.img`
  object-fit: cover;
  max-width: 500px;
  width: 100%;
  flex-grow: 1;

  @media ${device.md} {
    display: none;
  }
`;

export const TitleAndLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px 10px 10px;
  flex-grow: 2;
  max-height: 500px;
  overflow-y: auto;
`;

export const Title = styled.h3`
  align-self: center;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const LinkIconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
`;

export const Link = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  margin-bottom: 2px;

  &:hover {
    text-decoration: underline;
  }
`;

export const LinkIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;
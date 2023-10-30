import styled from 'styled-components';
import { device } from '../../assets/theme';

export const HeroBannerWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  
  @media ${device.lg} {
    flex-direction: column;
  }
`;

export const HeroBannerImageWrapper = styled.div`
  height: 600px;
  position: relative;
  flex-grow: 1;
`;

export const HeroBannerImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const HeroBannerInfoWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;

  @media ${device.lg} {
    padding: 0;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
  }

  @media ${device.md} {
    flex-direction: column;
    gap: 0;
  }
`;

export const HeroBannerTitle = styled.h2`
  position: absolute;
  top: 50%;
  left: 20%;
  font-size: 40px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const HeroBannerSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media ${device.md} {
    text-align: center;
  }
`;

export const HeroBannerSectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const SocialLinksWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media ${device.md} {
    justify-content: center;
  }
`;

export const SocialLink = styled.a`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const ContactItem = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;

  @media ${device.md} {
    justify-content: center;
  }
`;

export const ContactItemIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const ContactItemLink = styled.a`
  color: ${(props) => props.theme.colors.lightBrown};
  font-size: 20px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: ${(props) => props.theme.colors.lightBrown};
  }
`;

export const LocationText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.grey};
`;

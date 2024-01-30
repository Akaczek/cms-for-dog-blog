import { FC } from 'react';

import {
  HeroBannerWrapper,
  HeroBannerImageWrapper,
  HeroBannerInfoWrapper,
  HeroBannerImage,
  HeroBannerTitle,
  HeroBannerSectionTitle,
  HeroBannerSection,
  SocialLinksWrapper,
  SocialLink,
  ContactItem,
  ContactItemIcon,
  ContactItemLink,
  LocationText,
} from './HeroBanner.styles';
import { backendURL } from '../../lib/constants';
import dogPaw from '../../assets/paw.svg';
import {
  facebook,
  instagram,
  twitter,
  youtube,
  email,
  phone,
} from '../../assets/icons';
import { IComponentProps } from '../components.types';

const HeroBanner: FC<IComponentProps> = ({ component }) => {
  const imageLink = `${backendURL}/images/${component?.imageUrl ?? dogPaw}`;

  return (
    <HeroBannerWrapper>
      <HeroBannerImageWrapper>
        <HeroBannerImage
          src={imageLink}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = dogPaw;
          }}
          alt='dog paw'
        />
        <HeroBannerTitle>{component?.title ?? ''}</HeroBannerTitle>
      </HeroBannerImageWrapper>
      <HeroBannerInfoWrapper>
        <HeroBannerSection>
          <HeroBannerSectionTitle>Follow us</HeroBannerSectionTitle>
          <SocialLinksWrapper>
            <SocialLink href='https://www.facebook.com/'>
              <img src={facebook} alt='facebook' />
            </SocialLink>
            <SocialLink href='https://www.instagram.com/'>
              <img src={instagram} alt='instagram' />
            </SocialLink>
            <SocialLink href='https://twitter.com/'>
              <img src={twitter} alt='twitter' />
            </SocialLink>
            <SocialLink href='https://www.youtube.com/'>
              <img src={youtube} alt='youtube' />
            </SocialLink>
          </SocialLinksWrapper>
        </HeroBannerSection>
        <HeroBannerSection>
          <HeroBannerSectionTitle>Contact</HeroBannerSectionTitle>
          <ContactItem>
            <ContactItemIcon src={email} alt='email' />
            <ContactItemLink href='mailto:'>pound@gmail.com</ContactItemLink>
          </ContactItem>
          <ContactItem>
            <ContactItemIcon src={phone} alt='phone' />
            <ContactItemLink href='tel:'>123 456 789</ContactItemLink>
          </ContactItem>
        </HeroBannerSection>
        <HeroBannerSection>
          <HeroBannerSectionTitle>Location</HeroBannerSectionTitle>
          <LocationText>1234 Main St</LocationText>
        </HeroBannerSection>
      </HeroBannerInfoWrapper>
    </HeroBannerWrapper>
  );
};

export default HeroBanner;

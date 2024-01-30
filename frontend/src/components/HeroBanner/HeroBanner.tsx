import { FC, useContext } from 'react';

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
import { ConfigContext } from '../../lib/context/configContext';

const HeroBanner: FC<IComponentProps> = ({ component }) => {
  const imageLink = `${backendURL}/images/${component?.imageUrl ?? dogPaw}`;
  const { config } = useContext(ConfigContext);

  const getConfigValue = (key: string) => {
    return config.find((item) => item.key === key)?.value;
  };

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
            <SocialLink href={getConfigValue('Facebook')}>
              <img src={facebook} alt='facebook' />
            </SocialLink>
            <SocialLink href={getConfigValue('Instagram')}>
              <img src={instagram} alt='instagram' />
            </SocialLink>
            <SocialLink href={getConfigValue('Twitter')}>
              <img src={twitter} alt='twitter' />
            </SocialLink>
            <SocialLink href={getConfigValue('Youtube')}>
              <img src={youtube} alt='youtube' />
            </SocialLink>
          </SocialLinksWrapper>
        </HeroBannerSection>
        <HeroBannerSection>
          <HeroBannerSectionTitle>Contact</HeroBannerSectionTitle>
          <ContactItem>
            <ContactItemIcon src={email} alt='email' />
            <ContactItemLink href='mailto:'>{getConfigValue('Email')}</ContactItemLink>
          </ContactItem>
          <ContactItem>
            <ContactItemIcon src={phone} alt='phone' />
            <ContactItemLink href='tel:'>{getConfigValue('Phone')}</ContactItemLink>
          </ContactItem>
        </HeroBannerSection>
        <HeroBannerSection>
          <HeroBannerSectionTitle>Location</HeroBannerSectionTitle>
          <LocationText>{getConfigValue('Location')}</LocationText>
        </HeroBannerSection>
      </HeroBannerInfoWrapper>
    </HeroBannerWrapper>
  );
};

export default HeroBanner;

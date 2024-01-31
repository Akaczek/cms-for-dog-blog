import { FC } from "react";

import { FooterWrapper, FooterDate, FooterLink } from "./Footer.styles";

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <FooterDate>© 2024</FooterDate>
      <FooterLink to={'/policy'}>Privacy Policy</FooterLink>
    </FooterWrapper>
  );
};

export default Footer;
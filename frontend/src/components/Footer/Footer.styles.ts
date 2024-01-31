import styled from "styled-components";
import { device } from '../../assets/theme';
import { Link } from "react-router-dom";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding: 30px 0;
  margin-top: auto;

  @media ${device.md} {
    padding: 10px 0;
    height: 80px;
  }
`;

export const FooterDate = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  padding: 10px 30px;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black};

  &:hover {
    color: ${(props) => props.theme.colors.lightBrown};
  }

  &:visited {
    color: ${(props) => props.theme.colors.black};
  }
`;
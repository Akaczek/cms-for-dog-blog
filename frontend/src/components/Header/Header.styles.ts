import styled from 'styled-components';
import { device } from '../../assets/theme';

export const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: 30px 0;

  @media ${device.md} {
    padding: 10px 0;
    height: 80px;
    box-shadow: 0px 3px 15px 1px ${(props) => props.theme.colors.lightGrey};
  }
`;

export const NavItemsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5px;

  @media ${device.md} {
    display: none;
  }
`;

export const NavItem = styled.a`
  text-decoration: none;
  cursor: pointer;
  padding: 10px 30px;
  font-size: 20px;
  font-weight: 600;

  &:hover {
    color: ${(props) => props.theme.colors.lightBrown};
  }
`;

export const NavSeparator = styled.div`
  height: 100%;
  width: 3px;
  transform: rotate(20deg);
  background-color: ${(props) => props.theme.colors.lightGrey};
`;

export const HeaderLogo = styled.img`
  max-width: 162px;
  height: auto;

  @media ${device.md} {
    margin-right: 10px;
  }
`;

export const BurgerMenu = styled.img`
  position: relative;
  display: none;
  width: 30px;
  margin-left: 10px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGrey};
  }

  @media ${device.md} {
    display: block;
  }
`;

export const BurgerMenuItems = styled.div`
  display: none;

  @media ${device.md} {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    height: calc(100vh - 80px);
    width: 100%;
  }
`;

export const BurgerMenuItem = styled.a`
  text-decoration: none;
  padding: 10px 0 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 2px solid ${(props) => props.theme.colors.lightBrown};

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
`;

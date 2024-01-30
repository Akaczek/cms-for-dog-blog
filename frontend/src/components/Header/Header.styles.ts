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
  gap: 15px;

  @media ${device.md} {
    display: none;
  }
`;

export const NavItemWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
`;

export const NavItemLink = styled.a`
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

export const NavItemSubMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: -50%;
  width: 200px;
  max-height: 500px;
  z-index: 1;
  overflow-y: auto;
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
  cursor: pointer;

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
    z-index: 1;
    background-color: ${(props) => props.theme.colors.white};
    overflow-y: auto;
  }
`;

export const BurgerMenuItem = styled.div`
  text-decoration: none;
  padding: 10px 0 10px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  border-top: 2px solid ${(props) => props.theme.colors.lightBrown};
  border-bottom: 1px solid ${(props) => props.theme.colors.lightBrown};

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
`;

export const BurgerMenuSecondaryItem = styled.div`
  text-decoration: none;
  padding: 10px 0 10px 40px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightBrown};

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
`;

export const BurgerMenuTertiaryItem = styled.div`
  text-decoration: none;
  padding: 10px 0 10px 60px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightBrown};

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
`;

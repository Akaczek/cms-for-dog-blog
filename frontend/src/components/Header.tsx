import React, { FC, useState } from "react";
import {
  HeaderWrapper,
  NavItem,
  NavItemsWrapper,
  NavSeparator,
  HeaderLogo,
  BurgerMenu,
  BurgerMenuItems,
  BurgerMenuItem,
} from "./Header.styles";
import logo from '../assets/logo.png';
import burgerMenu from '../assets/icons/burgerMenu.svg'

const mockNav = ["Home", "Catalogue", "About"];

const Header: FC = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  return (
    <HeaderWrapper>
      <BurgerMenu
        src={burgerMenu}
        alt={"logo"}
        onClick={() => {
          setIsMenuExpanded(() => !isMenuExpanded);
        }}
      />
      {isMenuExpanded && (
        <BurgerMenuItems>
          {mockNav.map((item) => (
            <>
              <BurgerMenuItem>{item}</BurgerMenuItem>
            </>
          ))}
        </BurgerMenuItems>
      )}

      <HeaderLogo src={logo} alt={"logo"} />
      <NavItemsWrapper>
        {mockNav.map((item, index) => (
          <>
            <NavItem>{item}</NavItem>
            {index !== mockNav.length - 1 && <NavSeparator />}
          </>
        ))}
      </NavItemsWrapper>
    </HeaderWrapper>
  );
};

export default Header;

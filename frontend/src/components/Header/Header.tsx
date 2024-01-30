import { FC, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  HeaderWrapper,
  NavItemsWrapper,
  HeaderLogo,
  BurgerMenu,
  BurgerMenuItems,
  BurgerMenuItem,
  BurgerMenuSecondaryItem,
  BurgerMenuTertiaryItem,
} from './Header.styles';
import burgerMenu from '../../assets/icons/burgerMenu.svg';
import logo from '../../assets/logo.png';
import { PagesContext } from '../../lib/context/pagesContext';
import NavItem from './NavItem/NavItem';

const Header: FC = () => {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const { pages } = useContext(PagesContext);
  const navigate = useNavigate();

  const mainHeaderPages = pages.filter((page) => (
    page.inHeader && page.parentPageId === null
  ));

  return (
    <HeaderWrapper>
      <BurgerMenu
        src={burgerMenu}
        alt={'logo'}
        onClick={() => {
          setIsMenuExpanded(() => !isMenuExpanded);
        }}
      />
      {isMenuExpanded && (
        <BurgerMenuItems>
          {mainHeaderPages.map((item) => (
            <>
            <BurgerMenuItem onClick={
              () => {
                navigate('http://localhost:5173/' + item.path);
                setIsMenuExpanded(() => !isMenuExpanded);
              }
            } key={item.id}>{item.name}</BurgerMenuItem>
            {item.subpages.map((subpage) => (
              <>
                <BurgerMenuSecondaryItem onClick={
                  () => {
                    navigate('http://localhost:5173/' + subpage.path);
                    setIsMenuExpanded(() => !isMenuExpanded);
                  }
                } key={subpage.id}>{subpage.name}</BurgerMenuSecondaryItem>
                {subpage.subpages.map((subsubpage) => (
                  <BurgerMenuTertiaryItem onClick={
                    () => {
                      navigate('http://localhost:5173/' + subsubpage.path);
                      setIsMenuExpanded(() => !isMenuExpanded);
                    }
                  } key={subsubpage.id}>{subsubpage.name}</BurgerMenuTertiaryItem>
                ))}
              </>
            ))}
            </>
          ))}
        </BurgerMenuItems>
      )}

      <HeaderLogo src={logo} alt={'logo'} onClick={() => {
        navigate('/');
      }}/>
      <NavItemsWrapper>
        {mainHeaderPages.map((item, index) => (
          <NavItem page={item} showSeparator={index !== mainHeaderPages.length - 1} />
        ))}
      </NavItemsWrapper>
    </HeaderWrapper>
  );
};

export default Header;

import { FC, useState } from 'react';

import {
  NavSeparator,
  NavItemWrapper,
  NavItemLink,
  NavItemSubMenu,
} from '../Header.styles';
import { SecondaryLink, TertiaryLink } from './NavItem.styles';
import { INavItemProps } from './NavItem.types';

const NavItem: FC<INavItemProps> = ({ page, showSeparator }) => {
  const [isSubMenuExpanded, setIsSubMenuExpanded] = useState(false);

  return (
    <NavItemWrapper
      onMouseEnter={() => setIsSubMenuExpanded(true)}
      onMouseLeave={() => setIsSubMenuExpanded(false)}
    >
      <NavItemLink href={page.path} key={page.id}>
        {page.name}
      </NavItemLink>
      {isSubMenuExpanded && (
        <NavItemSubMenu>
          {page.subpages.map((subpage) => (
            <>
              <SecondaryLink to={subpage.path}>{subpage.name}</SecondaryLink>
              {subpage.subpages.map((subsubpage) => (
                <TertiaryLink to={subsubpage.path}>
                  {subsubpage.name}
                </TertiaryLink>
              ))}
            </>
          ))}
        </NavItemSubMenu>
      )}
      {showSeparator && <NavSeparator />}
    </NavItemWrapper>
  );
};

export default NavItem;

import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLinkContainer>
            <NavLink href="/sale">Sale</NavLink>
            <HiddenNavLink href="/sale">Sale</HiddenNavLink>
          </NavLinkContainer>
          <NavLinkContainer>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <HiddenNavLink href="/new">New&nbsp;Releases</HiddenNavLink>
          </NavLinkContainer>
          <NavLinkContainer>
            <NavLink href="/men">Men</NavLink>
            <HiddenNavLink href="/men">Men</HiddenNavLink>
          </NavLinkContainer>
          <NavLinkContainer>
            <NavLink href="/women">Women</NavLink>
            <HiddenNavLink href="/women">Women</HiddenNavLink>
          </NavLinkContainer>
          <NavLinkContainer>
            <NavLink href="/kids">Kids</NavLink>
            <HiddenNavLink href="/kids">Kids</HiddenNavLink>
          </NavLinkContainer>
          <NavLinkContainer>
            <NavLink href="/collections">Collections</NavLink>
            <HiddenNavLink href="/collections">Collections</HiddenNavLink>
          </NavLinkContainer>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLinkContainer = styled.div`
  position: relative;
  overflow: hidden;
  color: var(--color-gray-900);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const NavLink = styled.a`
  display: inline-block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: inherit;
  font-weight: ${WEIGHTS.medium};
  
  transition: transform 200ms;

  ${NavLinkContainer}:hover & {
    @media (prefers-reduced-motion: no-preference) {
      transform: translateY(-100%);
    }
  }
`;

const HiddenNavLink = styled(NavLink)`
  position: absolute;
  left: 0;
  bottom: -100%;
  font-weight: bold;
`;

export default Header;

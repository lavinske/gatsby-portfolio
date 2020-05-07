import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#about">About</AnchorLink>
    <AnchorLink href="#projects">Projects</AnchorLink>
  </Wrapper>
);

export default NavbarLinks;

import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <Link to="/"><img height="20vh" src="/icons/iconp.png"></img></Link>
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;

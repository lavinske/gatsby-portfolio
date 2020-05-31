/** @jsx jsx */
import React from 'react';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';
import { jsx, useColorMode, Styled } from 'theme-ui';

const Sidebar = ({ sidebar, toggle }) => (
  <Wrapper sx={{
  	bg:'background'
  }} active={sidebar} onClick={toggle}>
    <NavbarLinks />
  </Wrapper>
);

export default Sidebar;

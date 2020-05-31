/** @jsx jsx */
import React from 'react';
import { Wrapper } from './styles';
import { useColorMode, Styled, jsx } from 'theme-ui';

const NavbarLinks = ({desktop, props}) => {
const [colorMode] = useColorMode()

return(
  <Wrapper desktop={desktop}>
    <a sx={{
    	color:'text'
    }} href="#about">About</a>
    <a sx={{
    	color:'text'
    }}href="#projects">Projects</a>
  </Wrapper>
);
}

export default NavbarLinks;

/** @jsx jsx */
import React, { useState } from 'react';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import { Wrapper, Overlay, BackToTop, ChangeMode, IconButton } from './styles';
import { jsx, useColorMode, Styled } from 'theme-ui';
import btt from 'assets/icons/up.svg';
import darkIllustration from 'assets/icons/dark.svg';
import lightIllustration from 'assets/icons/light.svg';

export const Header = () => {
  const [sidebar, toggle] = useState(false)

  const [colorMode, setColorMode] = useColorMode()

  const newColorMode = colorMode === 'light' ? 'dark' : 'light'

  const icon = colorMode === 'light' ? darkIllustration : lightIllustration

  return (
    <Wrapper id="top">
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
      <BackToTop sx={{
          filter: colorMode === 'dark' || sidebar ? 'invert(1)' : 'none'
      }} href="#top">
            <IconButton width="50" src={btt} alt="Back to top" />
     </BackToTop>

    <ChangeMode sx={{
          filter: colorMode === 'dark' || sidebar ? 'invert(1)' : 'none',
      }} onClick={
        e=> {
          setColorMode(newColorMode)
        }
      }>
      <IconButton src={icon} alt={newColorMode + " mode"} />
    </ChangeMode>
    </Wrapper>
  );
};

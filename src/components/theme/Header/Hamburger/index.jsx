/** @jsx jsx */
import React from 'react';
import { Wrapper, Bar } from './styles';
import { jsx, useColorMode, Styled } from 'theme-ui';

const Hamburger = ({ sidebar, toggle }) => {

	const [colorMode] = useColorMode()

return(
  <Wrapper sx={{
  	filter : colorMode === 'dark' ? 'invert(1)' : 'none'
  }} sidebar={sidebar} onClick={() => toggle(!sidebar)}>
    <Bar top sidebar={sidebar} />
    <Bar mid sidebar={sidebar} />
    <Bar bottom sidebar={sidebar} />
  </Wrapper>
)
}

export default Hamburger;

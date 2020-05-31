/** @jsx jsx */
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container } from 'components/common';
import productive from 'assets/illustrations/productive.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail, SkillsParagraph } from './styles';
import { jsx, useColorMode, Styled } from 'theme-ui';
import detailsIllustration from 'assets/illustrations/details.svg';

export const Skills = () => {

const [colorMode] = useColorMode()

return(
  <Wrapper sx={{
  backgroundImage: colorMode === 'dark' ? 'none' : 'url('+detailsIllustration+')'
  }} id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={productive} alt="I’m Steven and I do Frontend and Backend development!" />
      </Thumbnail>
      <Details>
        <Styled.h1>About Me</Styled.h1>
        <p sx={{
          color:'text1',
          fontSize: 20,
          mb: 50
        }}>
          I am an university student from Bandung. I really interested in lightning-fast and modern software development. 
          I do freelance jobs sometimes. Now I'm learning React, Gatsby, and CodeIgniter.
        </p>
        <Styled.a href="mailto:saya@sangat.pro">
          Contact Me!
        </Styled.a>
      </Details>
    </SkillsWrapper>
  </Wrapper>
)
}

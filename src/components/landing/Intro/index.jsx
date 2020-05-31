/** @jsx jsx */
import React from 'react';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import cdr from 'assets/illustrations/coder_think.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail, IntroDesc } from './styles';
import { jsx, useColorMode, Styled } from 'theme-ui';
import overlayIllustration from 'assets/illustrations/overlay.svg';

export const Intro = () => { 

const [colorMode] = useColorMode()

return(
  <Wrapper sx={{
  backgroundImage: colorMode === 'dark' ? 'none' : 'url('+overlayIllustration+')'
  }}>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <Styled.h1>Hi There!</Styled.h1>
        <p sx={{
          color:'text1',
          fontSize: 30,
          mb: 50
        }}>I’m Steven Lavinske!</p>
        <Styled.a href="https://linkedin.com/in/lavinske" target="_blank">
          View my LinkedIn!
        </Styled.a>
      </Details>
      <Thumbnail>
        <img src={cdr} alt="I’m Steven Lavinske!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
)
}

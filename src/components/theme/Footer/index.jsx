/** @jsx jsx */
import React, { useState } from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details, Badges, BackToTop, ChangeMode, IconButton } from './styles';
import social from './social.json';
import { jsx, useColorMode, Styled } from 'theme-ui';
import footerIllustration from 'assets/illustrations/footer.svg';

export const Footer = () => {
  const [colorMode] = useColorMode()

return(
  <Wrapper sx={{
  backgroundImage: colorMode === 'dark' ? 'none' : 'url('+footerIllustration+')'
  }}>
    <Flex as={Container}>
      <Details>
        <Badges>
          <img src="https://www.hackthebox.eu/badge/image/312730" alt="Hack The Box"></img>
        </Badges>
        <span sx={{
          color:'text1'
        }}>
          © {new Date().getFullYear()} All Rights Reserved | Powered by{' '}<a sx={{ ":visited" : {color: colorMode === 'dark' ? "text" : ""},
           ":link" : {color: colorMode === 'dark' ? "text" : ""}
          }} href="https://gatsbyjs.org">Gatsby.js</a>{' '}| Made with{' '}
          <span aria-label="love" role="img">
            💖
          </span>{' '}
          by{' '}
          <a sx={{ ":visited" : {color: colorMode === 'dark' ? "text" : ""},
           ":link" : {color: colorMode === 'dark' ? "text" : ""}
          }} href="https://lav.my.id">
            Maxine
          </a>
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a sx={{
          filter: colorMode === 'dark' ? 'invert(.5)' : 'none'
      }} key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
)
}

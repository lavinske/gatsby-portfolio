import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={dev} alt="I’m Steven and I do Frontend and Backend development!" />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
          I am an university student from Bandung. I really interested in lightning-fast and modern software development. 
          I do freelance jobs sometimes. Now I'm learning React, Gatsby, and CodeIgniter.
        </p>
        <Button as={AnchorLink} href="mailto:saya@sangat.pro">
          Contact Me!
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);

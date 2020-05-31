import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Projects } from 'components/landing';
import { useColorMode, Styled, jsx } from 'theme-ui';

export default () => (
	<Styled.root>
	  <Layout>
	    <SEO />
	    <Intro />
	    <Projects />
	    <Skills />
	  </Layout>
	  </Styled.root>
  )

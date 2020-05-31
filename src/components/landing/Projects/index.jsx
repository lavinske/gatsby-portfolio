/** @jsx jsx */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import forkIcon from 'assets/icons/fork.svg';
import { Wrapper, Grid, Item, Content, Stats } from './styles';
import { jsx, useColorMode, Styled } from 'theme-ui';

export const Projects = () => {
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(affiliations: OWNER, first: 3, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  );
  const [colorMode] = useColorMode()
  return (
    <Wrapper as={Container} id="projects">
      <Styled.h2>My Project Collection</Styled.h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item sx={{
            boxShadow: colorMode === 'dark' ? '0 1px 6px 0 rgba(255,255,255,0.15)' : '0 1px 6px 0 rgba(0,0,0,0.15)'
          }} key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer">
            <Card>
              <Content>
                <Styled.h4>{node.name}</Styled.h4>
                <Styled.p>{node.description}</Styled.p>
              </Content>
              <Stats sx={{
                    color: 'text1'
                  }}>
                <div>
                  <img sx={{
                    filter: colorMode === 'dark' ? 'invert(1)' : 'none'
                  }} src={starIcon} alt="stars" />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <img sx={{
                    filter: colorMode === 'dark' ? 'invert(1)' : 'none'
                  }}src={forkIcon} alt="forks" />
                  <span>{node.forkCount}</span>
                </div>
              </Stats>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};

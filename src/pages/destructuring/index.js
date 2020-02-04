import React from 'react';
import { graphql } from 'gatsby';

import { Content, Title, Paragraph, Iframe, Links, ContentInfos } from '../styles';
import { StyledLink } from '../../components/layout/styles';

export default function Destructuring ({data}) {
  return (
    <Content>
      <Title>
        {data.markdownRemark.frontmatter.title}
      </Title>
      <Paragraph>
        {data.markdownRemark.frontmatter.subtitle}
      </Paragraph>
      <Iframe>
        <iframe title="destructuring" src="https://jsfiddle.net/leonardocesca/btk8Le1q/6/embedded/js/"></iframe>
      </Iframe>
      <Paragraph>
        {data.markdownRemark.frontmatter.explanation}
      </Paragraph>
      <Iframe>
        <iframe title="destructuring more" src="https://jsfiddle.net/leonardocesca/gLzxme57/3/embedded/js/"></iframe>
      </Iframe>
      <ContentInfos>
        <Title>{data.markdownRemark.frontmatter.infos}</Title>
        <Links>
          <StyledLink to='destructuring/destructuring-objects/'>{data.markdownRemark.frontmatter.destructObj[0].title}</StyledLink>
        </Links>
      </ContentInfos>
    </Content>
  )
}

export const pageQuery = graphql`
  query DestructuringPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/destructuring.md/" }) {
      frontmatter {
        title
        subtitle
        explanation
        infos
        date
        destructObj {
          title
        }
      }
    }
  }
`
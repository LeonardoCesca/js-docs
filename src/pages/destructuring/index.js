import React from 'react';
import { graphql, Link } from 'gatsby';

import { Content, Title, Paragraph, Iframe, Links } from '../styles';

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
        <iframe src="https://jsfiddle.net/leonardocesca/btk8Le1q/3/embedded/js/"></iframe>
      </Iframe>
      <Title>{data.markdownRemark.frontmatter.infos}</Title>
      <Links>
        <Link to='destructuring/destructuring-objects/'>{data.markdownRemark.frontmatter.destructObj[0].title}</Link>
      </Links>
    </Content>
  )
}

export const pageQuery = graphql`
  query DestructuringPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/destructuring.md/" }) {
      frontmatter {
        title
        subtitle
        infos
        date
        destructObj {
          title
        }
      }
    }
  }
`
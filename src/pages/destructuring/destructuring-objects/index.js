import React from 'react';
import { graphql } from 'gatsby';

import { Content, Title, Paragraph, Iframe, Links } from '../../styles';

export default function DestructuringObjects ({data}) {
  return (
    <Content>
      <Title>{data.markdownRemark.frontmatter.destructObj[0].title}</Title>
   </Content>
  )
}


export const pageQuery = graphql`
  query DestructObjPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/destructuring.md/" }) {
      frontmatter {
        destructObj {
          title
        }
      }
    }
  }
`

import React from 'react';
import { graphql } from 'gatsby';

import { Content, Title, Paragraph, Iframe } from '../../styles';

export default function FunctionExpression ({data}) {
  return (
    <Content>
      <Title>
        {data.markdownRemark.frontmatter.functionExpression[0].title}
      </Title>
      <Paragraph>
        {data.markdownRemark.frontmatter.functionExpression[1].subtitle}
      </Paragraph>
      <Iframe>
        <iframe title="function express" src="https://jsfiddle.net/Bruno_Ramires/5orpLbc6/3/embedded/js/"></iframe>
      </Iframe>
   </Content>
  )
}

export const pageQuery = graphql`
  query FunctionExpressionPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/function.md/" }) {
      frontmatter {
        functionExpression {
          title
          subtitle
        }
      }
    }
  }
`

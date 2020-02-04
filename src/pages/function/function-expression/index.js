import React from 'react';
import { graphql } from 'gatsby';

import { Content, Title, Paragraph } from '../../styles';

import Iframes from '../../../components/iframes/';

export default function FunctionExpression ({data}) {
  return (
    <Content>
      <Title>
        {data.markdownRemark.frontmatter.functionExpression[0].title}
      </Title>
      <Paragraph>
        {data.markdownRemark.frontmatter.functionExpression[1].subtitle}
      </Paragraph>
        <Iframes url="https://jsfiddle.net/Bruno_Ramires/5orpLbc6/3/embedded/js/" />
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

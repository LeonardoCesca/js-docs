import React from 'react';
import { graphql } from 'gatsby';

import { Content, Title, Paragraph } from '../../styles';

import Iframes from '../../../components/iframes/';

export default function DestructuringArrays ({data}) {

  return (
    <Content>
      <Title>
        {data.markdownRemark.frontmatter.destructArray[0].title}
      </Title>

      <Paragraph>
        {data.markdownRemark.frontmatter.destructArray[1].subtitle}
      </Paragraph>

      <Iframes description="iframe destructuring arrays" url="https://jsfiddle.net/thiagopaiva99/2zdo6cvn/3/embedded/js/" />

      <Title>
        {data.markdownRemark.frontmatter.destructArrayIgnoreIndex[0].title}
      </Title>

      <Paragraph>
        {data.markdownRemark.frontmatter.destructArrayIgnoreIndex[1].subtitle}
      </Paragraph>

      <Iframes description="iframe destructuring arrays" url="https://jsfiddle.net/thiagopaiva99/mdLbrjao/1/embedded/js/" />

      <Paragraph>
        {data.markdownRemark.frontmatter.explanation}
      </Paragraph>

      <Iframes description="iframe destructuring arrays" url="https://jsfiddle.net/thiagopaiva99/o6tLyq1x/1/embedded/js/" />
   </Content>
  )
}


export const pageQuery = graphql`
  query DestructArrayPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/destructuring.md/" }) {
      frontmatter {
        explanation

        destructArray {
          title
          subtitle
        }

        destructArrayIgnoreIndex {
          title
          subtitle
        }
      }
    }
  }
`
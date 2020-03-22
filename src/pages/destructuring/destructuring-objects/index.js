import React from 'react';
import { graphql } from 'gatsby';

import { Content, Title, Paragraph } from '../../styles';

import Iframes from '../../../components/iframes/';
import SEO from '../../../components/seo';

export default function DestructuringObjects ({data}) {

  return (
    <Content>
      <SEO
        title={data.markdownRemark.frontmatter.destructObj[0].title}
        description={data.markdownRemark.frontmatter.destructObj[1].subtitle}
      />
      <Title>
        {data.markdownRemark.frontmatter.destructObj[0].title}
      </Title>
      <Paragraph>
        {data.markdownRemark.frontmatter.destructObj[1].subtitle}
      </Paragraph>
      <Iframes description="iframe destructuring objects" url="https://jsfiddle.net/leonardocesca/g76nu4qt/23/embedded/js/" />
   </Content>
  )
}


export const pageQuery = graphql`
  query DestructObjPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/destructuring.md/" }) {
      frontmatter {
        destructObj {
          title
          subtitle
        }
      }
    }
  }
`

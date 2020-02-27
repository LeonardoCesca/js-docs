import React from 'react';
import { graphql } from 'gatsby';

import { Content, Title, Subtitle, Paragraph, Links, ContentInfos } from '../styles';
import { StyledLink } from '../../components/layout/styles';

import Iframes from '../../components/iframes';
import SEO from '../../components/seo';

export default function Closure({data}) {
  return (
    <Content>
      <SEO
        title={data.markdownRemark.frontmatter.title}
        description={data.markdownRemark.frontmatter.subtitle}
      />
      <Title>
        {data.markdownRemark.frontmatter.title}
      </Title>
      <Paragraph>
        {data.markdownRemark.frontmatter.subtitle}
      </Paragraph>
        <Iframes description="iframe closure 1" url="https://jsfiddle.net/viniciusog/vj809tn7/embedded/js/" />
      <Paragraph>
        {data.markdownRemark.frontmatter.explanation}
      </Paragraph>
    </Content>
  )
}

export const pageQuery = graphql`
  query ClosurePageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/closure.md/" }) {
      frontmatter {
        title
        subtitle
        explanation
        infos
        date
      }
    }
  }
`
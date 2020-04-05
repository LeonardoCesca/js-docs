import React from 'react';
import { graphql } from 'gatsby';

import { Content, Title, Subtitle, Paragraph, Links, ContentInfos } from '../styles';
import { StyledLink } from '../../components/layout/styles';

import Iframes from '../../components/iframes/';
import SEO from '../../components/seo';

export default function Flat ({data}) {
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
      <Subtitle>{data.markdownRemark.frontmatter.explanationLevels}</Subtitle>
        <Paragraph>{data.markdownRemark.frontmatter.levels}</Paragraph>
        <Iframes
          description="iframe flat"
          url="https://jsfiddle.net/leonardocesca/463tfcms/7/embedded/js/"
          />
      <ContentInfos>
        <Subtitle>{data.markdownRemark.frontmatter.infos}</Subtitle>
        <Links>
          <StyledLink to='flat/flat-examples/'>{data.markdownRemark.frontmatter.flatExamples[0].title}</StyledLink>
        </Links>
      </ContentInfos>
    </Content>
  )
}

export const pageQuery = graphql`
  query FlatPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/flat.md/" }) {
      frontmatter {
        title
        subtitle
        explanationLevels
        levels
        explanation
        infos
        date
        flatExamples {
          title
        }
      }
    }
  }
`
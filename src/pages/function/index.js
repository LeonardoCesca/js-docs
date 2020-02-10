import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Subtitle, Paragraph, Links, ContentInfos } from "../styles"
import { StyledLink } from "../../components/layout/styles"

import Iframes from "../../components/iframes/"

export default function Function({ data }) {
  return (
    <Content>
      <Title>{data.markdownRemark.frontmatter.title}</Title>
      <Paragraph>{data.markdownRemark.frontmatter.subtitle}</Paragraph>
      <Iframes
        description="iframe function"
        url="https://jsfiddle.net/Bruno_Ramires/mhja5r9n/3/embedded/js/"
      />
        <Subtitle>Escopo</Subtitle>
        <Paragraph>{data.markdownRemark.frontmatter.explanation}</Paragraph>
        <Iframes
          description="iframe function"
          url="https://jsfiddle.net/Bruno_Ramires/b65afu81/1/embedded/js/"
          />
      <ContentInfos>
        <Subtitle>{data.markdownRemark.frontmatter.infos}</Subtitle>
        <Links>
          <StyledLink to="function/function-expression/">
            {data.markdownRemark.frontmatter.functionExpression[0].title}
          </StyledLink>
        </Links>
      </ContentInfos>
    </Content>
  )
}

export const FunctionPageQuery = graphql`
  query FunctionPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/function.md/" }) {
      frontmatter {
        title
        subtitle
        explanation
        infos
        functionExpression {
          subtitle
          title
        }
      }
    }
  }
`

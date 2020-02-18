import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Paragraph } from "../../styles"

import Iframes from "../../../components/iframes/"
import SEO from "../../../components/seo"

export default function FunctionExpression({ data }) {
  return (
    <Content>
      <SEO
        title={data.markdownRemark.frontmatter.functionExpression[0].title}
        description={data.markdownRemark.frontmatter.functionExpression[1].subtitle}
      />
      <Title>
        {data.markdownRemark.frontmatter.functionExpression[0].title}
      </Title>
      <Paragraph>
        {data.markdownRemark.frontmatter.functionExpression[1].subtitle}
      </Paragraph>
      <Iframes
        description="iframe function expression"
        url="https://jsfiddle.net/Bruno_Ramires/5orpLbc6/3/embedded/js/"
      />
      <Paragraph>
        {data.markdownRemark.frontmatter.functionExpression[2].explanation}
      </Paragraph>
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
          explanation
        }
      }
    }
  }
`

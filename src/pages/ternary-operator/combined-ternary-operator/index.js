import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Paragraph } from "../../styles"

import Iframes from "../../../components/iframes/"

export default function CombinedTernaryOperator({ data }) {
  const { title } = data.markdownRemark.frontmatter.combinedTernaryOperator[0]
  const {
    subtitle,
  } = data.markdownRemark.frontmatter.combinedTernaryOperator[1]
  const {
    explanation,
  } = data.markdownRemark.frontmatter.combinedTernaryOperator[2]
  return (
    <Content>
      <Title>{title}</Title>
      <Paragraph>{subtitle}</Paragraph>
      <Paragraph>{explanation}</Paragraph>
      <Iframes
        description="iframe combined ternary operator expression"
        url="https://jsfiddle.net/LaksCastro/dp8zjgay/embedded/js/"
      />
    </Content>
  )
}

export const pageQuery = graphql`
  query CombinedTernaryOperatorPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/ternary-operator.md/" }) {
      frontmatter {
        combinedTernaryOperator {
          title
          subtitle
          explanation
        }
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Paragraph } from "../../styles"

import Iframes from "../../../components/iframes/"

export default function UnionArray({ data }) {
  const { title } = data.markdownRemark.frontmatter.unionArray[0]
  const {
    subtitle,
  } = data.markdownRemark.frontmatter.unionArray[1]
  const {
    explanation,
  } = data.markdownRemark.frontmatter.unionArray[2]
  return (
    <Content>
      <Title>{title}</Title>
      <Paragraph>{subtitle}</Paragraph>
      <Paragraph>{explanation}</Paragraph>
      <Iframes
        description="iframe combined ternary operator expression"
        url="//jsfiddle.net/infinityover/1d9bh0jg/6/embedded/js/"
      />
    </Content>
  )
}

export const pageQuery = graphql`
  query unionArrayPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/spread-operator.md/" }) {
      frontmatter {
        unionArray {
          title
          subtitle
          explanation
        }
      }
    }
  }
`

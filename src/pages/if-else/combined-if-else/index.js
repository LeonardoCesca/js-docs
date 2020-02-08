import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Paragraph } from "../../styles"

import Iframes from "../../../components/iframes/"

export default function CombinedIfElse({ data }) {
  const { ifElseWithElseIf } = data.markdownRemark.frontmatter
  return (
    <Content>
      <Title>{ifElseWithElseIf[0].title}</Title>
      <Paragraph>{ifElseWithElseIf[1].subtitle}</Paragraph>
      <Iframes
        description="iframe destructuring objects"
        url="https://jsfiddle.net/LaksCastro/7h2abu5t/18/embedded/js/"
      />
    </Content>
  )
}

export const pageQuery = graphql`
  query IfElseWithElseIfQuery {
    markdownRemark(fileAbsolutePath: { regex: "/if-else.md/" }) {
      frontmatter {
        ifElseWithElseIf {
          title
          subtitle
        }
      }
    }
  }
`

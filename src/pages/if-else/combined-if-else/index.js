import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Paragraph } from "../../styles"

import Iframes from "../../../components/iframes/"
import SEO from "../../../components/seo"

export default function CombinedIfElse({ data }) {
  const { ifElseWithElseIf } = data.markdownRemark.frontmatter
  return (
    <Content>
      <SEO
        title={ifElseWithElseIf[0].title}
        description={ifElseWithElseIf[1].subtitle}
      />
      <Title>{ifElseWithElseIf[0].title}</Title>
      <Paragraph>{ifElseWithElseIf[1].subtitle}</Paragraph>
      <Iframes
        description="iframe using combined operators"
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

import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Paragraph } from "../../styles"

import Iframes from "../../../components/iframes"
import SEO from "../../../components/seo"

export default function ObjectsIteration({ data }) {
  const { title } = data.markdownRemark.frontmatter.ObjectsIteration[0]
  const {
    subtitle,
  } = data.markdownRemark.frontmatter.ObjectsIteration[1]
  const {
    explanation,
  } = data.markdownRemark.frontmatter.ObjectsIteration[2]
  return (
    <Content>
      <SEO
        title={title}
        description={subtitle}
      />
      <Title>{title}</Title>
      <Paragraph>{subtitle}</Paragraph>
      <Paragraph>{explanation}</Paragraph>
      <Iframes
        description="iframe objects iteration"
        url=""
      />
    </Content>
  )
}

export const pageQuery = graphql`
  query ObjectsIterationPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/objects.md/" }) {
      frontmatter {
        ObjectsIteration {
          title
          subtitle
          explanation
        }
      }
    }
  }
`

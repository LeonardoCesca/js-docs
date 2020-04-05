import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Subtitle, Paragraph } from "../../styles"

import Iframes from "../../../components/iframes/"
import SEO from "../../../components/seo"

export default function flatExamples ({data}) {
  return (
    <Content>
      <SEO
        title={data.markdownRemark.frontmatter.flatExamples[0].title}
        description={data.markdownRemark.frontmatter.flatExamples[0].title}
      />
      <Title>{data.markdownRemark.frontmatter.flatExamples[0].title}</Title>
      <Paragraph>{data.markdownRemark.frontmatter.flatExamples[1].subtitle}</Paragraph>
      <Subtitle>{data.markdownRemark.frontmatter.flatExamples[2].title}</Subtitle>
      <Paragraph>{data.markdownRemark.frontmatter.flatExamples[3].subtitle}</Paragraph>
      <Iframes
        description="flat example 1"
        url="https://jsfiddle.net/leonardocesca/fjtrdwgv/4/embedded/js/"
      />
      <Subtitle>{data.markdownRemark.frontmatter.flatExamples[4].title}</Subtitle>
      <Paragraph>{data.markdownRemark.frontmatter.flatExamples[5].subtitle}</Paragraph>
      <Iframes
        description="flat example 2"
        url="https://jsfiddle.net/leonardocesca/fjtrdwgv/8/embedded/js/"
      />
       <Subtitle>{data.markdownRemark.frontmatter.flatExamples[6].title}</Subtitle>
      <Paragraph>{data.markdownRemark.frontmatter.flatExamples[7].subtitle}</Paragraph>
      <Iframes
        description="flat example 3"
        url="https://jsfiddle.net/leonardocesca/fjtrdwgv/9/embedded/js/"
      />
    </Content>
  )
}

export const pageQuery = graphql`
  query FlatExamplesPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/flat.md/" }) {
      frontmatter {
        flatExamples {
          title
          subtitle
        }
      }
    }
  }
`

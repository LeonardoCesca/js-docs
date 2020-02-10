import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Paragraph } from "../../styles"

import Iframes from "../../../components/iframes"

export default function MapFilter({ data }) {
  const { mapWithFilter } = data.markdownRemark.frontmatter
  return (
    <Content>
      <Title>{mapWithFilter[0].title}</Title>
      <Paragraph>{mapWithFilter[1].subtitle}</Paragraph>
      <Iframes
        description="map with filter"
        url="https://jsfiddle.net/bluues/pc45z1vh/39/embedded/js/"
      />
      <Title>Em breve alguns exemplos mais praticos e proximos do mundo real!</Title>
    </Content>
  )
}

export const pageQuery = graphql`
  query functiosnPures {
    markdownRemark(fileAbsolutePath: { regex: "/array-helpers.md/" }) {
      frontmatter {
        mapWithFilter {
          title
          subtitle
        }
      }
    }
  }
`

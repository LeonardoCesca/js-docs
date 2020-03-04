import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Subtitle, Paragraph, Links, ContentInfos } from "../styles"
import { StyledLink } from "../../components/layout/styles"

import Iframes from "../../components/iframes/"
import SEO from "../../components/seo"

export default function Switch({ data }) {
  const {
    title,
    subtitle,
    infos,
    date,
  } = data.markdownRemark.frontmatter

  return (
    <Content>
      <SEO
        title={title}
        description={subtitle}
      />
      <Title>{title}</Title>
      <Paragraph>{subtitle}</Paragraph>
      <Iframes
        description="how to use switch"
        url="https://jsfiddle.net/neriGabriel/sdb3q4ho/3/embedded/js/"
      />
      <Subtitle>Explicação</Subtitle>
      <Paragraph>
        A instrução switch avalia uma expressão caso a caso (case)< br />
        Se o valor da avaliação for considerado como true, então é executado o bloco de comandos dentro do case, caso nenhuma comparação retornar true então podemos definir um valor default.
      </Paragraph>
      <Iframes
        description="how to use switch with default"
        url="https://jsfiddle.net/neriGabriel/2k7ta0db/8/embedded/js/"
      />
    </Content>
  )
}

export const pageQuery = graphql`
  query Switch {
    markdownRemark(fileAbsolutePath: { regex: "/switch.md/" }) {
      frontmatter {
        title
        subtitle
        infos
        date
      }
    }
  }
`

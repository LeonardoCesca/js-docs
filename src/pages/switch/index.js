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
        url="https://jsfiddle.net/neriGabriel/jxgpmLwe/7/embedded/js/"
      />
      <Subtitle>Explicação</Subtitle>
      <Paragraph>
        A instrução switch avalia uma expressão fornecida via parametro (podendo ser uma variavél, condição, string, booleano etc) caso a caso
        se o valor da avaliação retornar true então o bloco de comandos dentro do caso é executado, caso nenhuma comparação retornar true então podemos
        definir um case default.
      </Paragraph>
      <Iframes
        description="how to use switch with default"
        url="https://jsfiddle.net/neriGabriel/2k7ta0db/8/embedded/js/"
      />
      <Iframes
        description="how to use switch with default 2"
        url="https://jsfiddle.net/neriGabriel/6q8pr4tn/13/embedded/js/"
      />
      <Subtitle>Multi-avaliações</Subtitle>
      <Paragraph>
        A instrução switch permite tambem a multi-avaliação de parametros para a execução de um mesmo bloco de comandos.
      </Paragraph>
      <Iframes
        description="how to use switch with default 2"
        url="https://jsfiddle.net/neriGabriel/c2jm540u/8/embedded/js/"
      />
      <Subtitle>Exemplo de menu com a instrução switch</Subtitle>
      <Paragraph>
        A baixo um exemplo prático de um simples menu utilizando a instrução switch junto a cases mais elaborados.
      </Paragraph>
      <Iframes
        description="how to use switch with default 3"
        url="https://jsfiddle.net/neriGabriel/pqrbs7yt/13/embedded/js/"
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

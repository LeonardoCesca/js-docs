import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Subtitle, Paragraph } from "../styles"

import Iframes from "../../components/iframes/"
import SEO from "../../components/seo"

export default function StringPadding({ data }) {
  const {
    title,
    subtitle
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
        description="how to use string padding"
        url="https://jsfiddle.net/neriGabriel/06cy24be/1/embedded/js/"
      />
      <Subtitle>Explicação</Subtitle>
      <Paragraph>
        Os comandos padStart e padEnd são comumente utilizados em strings e sempre esperam no primeiro parametro um tamanho
		    e caso esse tamanho for menor que tamanho da string
		    nada é feito, caso seja maior é adionado um espaço(ou um valor pré-definido) no inicio ou fim respectivamente.
      </Paragraph>
      <Iframes
        description="how to use string padding 2 "
        url="https://jsfiddle.net/neriGabriel/06cy24be/2/embedded/js/"
      />
      <Iframes
        description="how to use string padding 3 "
        url="https://jsfiddle.net/neriGabriel/06cy24be/4/embedded/js/"
      />
      <Iframes
        description="how to use string padding 4 "
        url="https://jsfiddle.net/neriGabriel/06cy24be/6/embedded/js/"
      />
      <Subtitle>Exemplo de preenchimento de uma string com String padding</Subtitle>
      <Paragraph>
        A baixo um exemplo prático de um simples preenchimento de uma string com 15 caracteres (numeros randomicos) no começo e fim
      </Paragraph>
      <Iframes
        description="how to use string padding 5"
        url="https://jsfiddle.net/neriGabriel/06cy24be/8/embedded/js/"
      />
    </Content>
  )
}

export const pageQuery = graphql`
  query StringPadding {
    markdownRemark(fileAbsolutePath: { regex: "/string-padding.md/" }) {
      frontmatter {
        title
        subtitle
      }
    }
  }
`

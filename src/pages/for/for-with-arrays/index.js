import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Subtitle, Paragraph } from "../../styles"

import Iframes from "../../../components/iframes/"

export default function ForWithArrays({ data }) {
  const { forWithArrays } = data.markdownRemark.frontmatter
  return (
    <Content>
      <Title>{forWithArrays[0].title}</Title>
      <Paragraph>{forWithArrays[1].subtitle}</Paragraph>
      <Iframes
        description="iframe loop for with arrays"
        url="https://jsfiddle.net/LaksCastro/wzmq58ho/21/embedded/js/"
      />
      <Subtitle>Lógica</Subtitle>
      <Paragraph>
        Esta é uma das principais aplicações do For, a lógica dessa forma de uso
        é basicamente: declarar o valor inicial, que é 0. Iterar sobre um bloco
        de código que pega o index equivalente ao valor do contador no momento.
        E a condição é esta: se o contador for menor que o tamanho do array,
        então quer dizer que não iteramos o array inteiro, portanto retorne
        verdadeiro para executar mais uma vez
      </Paragraph>
    </Content>
  )
}

export const pageQuery = graphql`
  query ForWithArraysQuery {
    markdownRemark(fileAbsolutePath: { regex: "/for.md/" }) {
      frontmatter {
        forWithArrays {
          title
          subtitle
        }
      }
    }
  }
`

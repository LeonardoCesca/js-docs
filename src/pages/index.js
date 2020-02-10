import React from "react"

import { Content, Title, Paragraph } from "./styles"

import Contributors from "../components/contributors"

export default function Home() {
  return (
    <Content>
      <Title>Seja bem vindo ao JavaScript Doc's</Title>
      <Paragraph>
        Este projeto foi desenvolvido com a tecnologia
        <a
          href="https://www.gatsbyjs.org/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          Gatsby{" "}
        </a>
        e com a cooperação do
        <a
          href="https://jsfiddle.net/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          JSFiddle
        </a>
        . Com a intenção de contribuir com o Open Source, cooperando e ajudando
        a aumentar cada vez mais nossa querida comunidade!
      </Paragraph>
      <Paragraph>
        Se você contribuir com o projeto, poderá aparecer aqui também :)
      </Paragraph>
      <Contributors />
    </Content>
  )
}

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
        description="how to use arrow function"
        url="//jsfiddle.net/neriGabriel/zexq5h4y/13/embedded/js/"
      />
      <Subtitle>Explicação</Subtitle>
      <Paragraph>
        A arrow function foi introduzida nas especificações da ES6 e tem como objetivo escrever funções mais curtas com uma sintaxe diferente, podendo ser utilizada em variavies,
		callbacks (removendo a utilização do prefixo function) e etc.
		Sua sintaxe é definida como variavel => bloco de execução, podendo receber via parametro 'N' variaveis entre parenteses separadas por virgulas e seu bloco de execução
		podendo haver chaves quando existir mais de uma linha.
		Tem um retorno padrão pré-definido com base no bloco de execução, porém este pode ser alterado.
      </Paragraph>
      <Iframes
        description="how to use arrow function 2"
        url="//jsfiddle.net/neriGabriel/9kc73z51/12/embedded/js/"
      />
      <Iframes
        description="how to use arrow function 3"
        url="//jsfiddle.net/neriGabriel/9kc73z51/14/embedded/js/"
      />
      <Iframes
        description="how to use arrow function 4"
        url="//jsfiddle.net/neriGabriel/9kc73z51/23/embedded/js/"
      />
      <Subtitle>Exemplo de arrow function e requisição via fetch</Subtitle>
      <Paragraph>
        A baixo um exemplo prático de uma simples requisição via fetch na API do pokemon utilizando arrow function no callback
      </Paragraph>
      <Iframes
        description="how to use switch with default 5"
        url="https://jsfiddle.net/neriGabriel/9kc73z51/39/embedded/js/"
      />
		
    </Content>
  )
}

export const pageQuery = graphql`
  query ArrowFunction {
    markdownRemark(fileAbsolutePath: { regex: "/arrow-function.md/" }) {
      frontmatter {
        title
        subtitle
        infos
        date
      }
    }
  }
`

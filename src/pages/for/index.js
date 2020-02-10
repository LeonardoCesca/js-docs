import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Subtitle, Paragraph, Links, ContentInfos } from "../styles"
import { StyledLink } from "../../components/layout/styles"

import Iframes from "../../components/iframes/"

export default function LoopFor({ data }) {
  const {
    title,
    subtitle,
    infos,
    forWithArrays,
  } = data.markdownRemark.frontmatter
  return (
    <Content>
      <Title>{title}</Title>
      <Paragraph>{subtitle}</Paragraph>
      <Iframes
        description="iframe for loop"
        url="https://jsfiddle.net/LaksCastro/wzmq58ho/14/embedded/js/"
      />
      <Subtitle>Estrutura</Subtitle>
      <Paragraph>
        A mágica acontece nesta estrutura: <br />
        for(x; y; z) <br />
        Note, é usado ";" para dividir as instruções, não ","
      </Paragraph>
      <Subtitle>Valor Inicial</Subtitle>
      <Paragraph>
        X ou Valor Inicial, é o lugar que contém o valor inicial do contador,
      </Paragraph>
      <Subtitle>Expressão</Subtitle>
      <Paragraph>
        Y ou Expressão é onde será feita uma validação, ou seja, se a validação
        for verdadeira, o código dentro do For será executado // caso seja
        falso, o compilador sairá do bloco For
      </Paragraph>
      <Subtitle>Expressão Final</Subtitle>
      <Paragraph>
        Z é onde incrementamos o valor da variável inicial, no exemplo, estamos
        atribuindo a ela com o valor dela mesma mais 1
      </Paragraph>
      <Paragraph>
        A expressão utilizada no exemplo como a condição é: caso o valor inicial
        seja menor que o valor final, acrescente a ele + 1 e imprima no console,
        e isto dá o resultado de um loop até que o valor inicial seja maior que
        o final e o compilador saia da instrução For
      </Paragraph>

      <ContentInfos>
        <Subtitle>{infos}</Subtitle>
        <Links>
          <StyledLink to="/for/for-with-arrays">
            {forWithArrays[0].title}
          </StyledLink>
        </Links>
      </ContentInfos>
    </Content>
  )
}

export const pageQuery = graphql`
  query LoopForQuery {
    markdownRemark(fileAbsolutePath: { regex: "/for.md/" }) {
      frontmatter {
        title
        subtitle
        explanation
        infos
        date
        forWithArrays {
          title
        }
      }
    }
  }
`

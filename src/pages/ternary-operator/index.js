import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Subtitle, Paragraph, Links, ContentInfos } from "../styles"
import { StyledLink } from "../../components/layout/styles"

import Iframes from "../../components/iframes/"

export default function TernaryOperator({ data }) {
  const {
    title,
    subtitle,
    explanation,
    infos,
    combinedTernaryOperator,
  } = data.markdownRemark.frontmatter
  return (
    <Content>
      <Title>{title}</Title>
      <Paragraph>{subtitle}</Paragraph>
      <Iframes
        description="iframe ternary operator"
        url="https://jsfiddle.net/LaksCastro/Lpua0z39/7/embedded/js/"
      />
        <Paragraph>{explanation}</Paragraph>
        <Subtitle>Exemplo mais elaborado</Subtitle>
        <Paragraph>
          Vamos construir uma função que recebe dois números e retorna um
          booleano que, se a soma entre eles for um numero par retorna
          verdadeiro, se não, retorna falso, e vamos usar essa função dentro de
          um operador ternário para decidir o valor de uma variável
        </Paragraph>
        <Iframes
          description="iframe ternary operator"
          url="https://jsfiddle.net/LaksCastro/dp8zjgay/1/embedded/js/"
          />
        <ContentInfos>
          <Subtitle>{infos}</Subtitle>
          <Links>
            <StyledLink to="ternary-operator/combined-ternary-operator/">
              {combinedTernaryOperator[0].title}
            </StyledLink>
          </Links>
        </ContentInfos>
    </Content>
  )
}

export const FunctionPageQuery = graphql`
  query TernaryOperator {
    markdownRemark(fileAbsolutePath: { regex: "/ternary-operator.md/" }) {
      frontmatter {
        title
        subtitle
        infos
        explanation
        combinedTernaryOperator {
          title
          subtitle
        }
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Subtitle, Paragraph, Links, ContentInfos } from "../styles"
import { StyledLink } from "../../components/layout/styles"

import Iframes from "../../components/iframes/"

export default function SpreadOperator({ data }) {
  const {
    title,
    subtitle,
    explanation,
    infos,
    unionArray,
  } = data.markdownRemark.frontmatter
  return (
    <Content>
      <Title>{title}</Title>
      <Paragraph>{subtitle}</Paragraph>
      <Iframes
        description="iframe spread operator"
        url="https://jsfiddle.net/infinityover/9sjLfx2v/6/embedded/js/"
      />
        <Paragraph>{explanation}</Paragraph>
        <Subtitle>Exemplo mais elaborado</Subtitle>
        <Paragraph>
          Vamos construir uma função que receba 3 parametros e realize 
          a soma dos parametros para conseguirmos verificar o uso do 
          Spread Operator.
          E realizar o clone de um objeto para que possamos
           alterar os seus valores posteriormente de forma simples
        </Paragraph>
        <Iframes
          description="iframe spread operator"
          url="https://jsfiddle.net/infinityover/5om9rgt8/12/embedded/js/"
          />
          <ContentInfos>
        <Subtitle>{infos}</Subtitle>
        <Links>
          <StyledLink to="spread-operator/union-array/">
            {unionArray[0].title}
          </StyledLink>
        </Links>
      </ContentInfos>
    </Content>
  )
}

export const FunctionPageQuery = graphql`
  query SpreadOpearator {
    markdownRemark(fileAbsolutePath: { regex: "/spread-operator.md/" }) {
      frontmatter {
        title
        subtitle
        infos
        explanation
        unionArray {
          title
          subtitle
        }
      }
    }
  }
`

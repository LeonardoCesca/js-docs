import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Subtitle, Paragraph, Links, ContentInfos } from "../styles"
import { StyledLink } from "../../components/layout/styles"

import Iframes from "../../components/iframes/"

export default function ElseIf({ data }) {
  const {
    title,
    subtitle,
    infos,
    ifElseWithElseIf,
  } = data.markdownRemark.frontmatter
  return (
    <Content>
      <Title>{title}</Title>
      <Paragraph>{subtitle}</Paragraph>
      <Iframes
        description="iframe using If operator 1"
        url="https://jsfiddle.net/LaksCastro/xLqh6tw5/12/embedded/js/"
      />

      <Subtitle>Complementando com o operador Else</Subtitle>
      <Paragraph>
        E se quisermos executar um código pra caso a condição seja verdadeira e
        outro código para caso a condição seja falsa? Fazemos duas comparações?
        Nada disso, podemos usar o Else, como mostra o exemplo abaixo:
      </Paragraph>
      <Iframes
        description="iframe using If operator 2"
        url="https://jsfiddle.net/LaksCastro/94ocLtm7/7/embedded/js/"
      />
      <ContentInfos>
        <Subtitle>{infos}</Subtitle>
        <Links>
          <StyledLink to="if-else/combined-if-else/">
            {ifElseWithElseIf[0].title}
          </StyledLink>
        </Links>
      </ContentInfos>
    </Content>
  )
}

export const pageQuery = graphql`
  query IfElsePageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/if-else.md/" }) {
      frontmatter {
        title
        subtitle
        explanation
        infos
        date
        ifElseWithElseIf {
          title
        }
      }
    }
  }
`

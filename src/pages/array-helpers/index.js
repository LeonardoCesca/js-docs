import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Paragraph, Links, ContentInfos } from "../styles"
import { StyledLink } from "../../components/layout/styles"

import Iframes from "../../components/iframes"

export default function ArrayHelpers({ data }) {
  const {
    title,
    subtitle,
    infos,
    mapWithFilter,
  } = data.markdownRemark.frontmatter
  return (
    <Content>
      <Title>{title}</Title>
      <Paragraph>{subtitle}</Paragraph>
      <Title>Método Map</Title>
      <Paragraph>
        O método map() funciona parecida como um loop for-each. Ele irá criar um
        novo array baseado no array e antigo e fazer as respectivas mudanças
        nele. Note que ele não faz nenhuma alteração no array original, vai ser
        criado um novo e retornado
      </Paragraph>
      <Iframes
        description="how to use map"
        url="https://jsfiddle.net/bluues/yLzs4m8q/12/embedded/js/"
      />

      <Title>Método Filter</Title>
      <Paragraph>
        Agora imagina que você está recebendo um array e o retorno dele vem algo
        do tipo ['Joao', 'José', undefined] Já pensou como seria chato tratar?
        Fazendo um for juntamente com alguns if's. Mas com o filter isso não é
        nescessario. Como o nome ja diz, ele vai filtrar apenas aqueles dados
        que o convêm, e funciona da mesma forma; Gerando um novo array de dados
        sem modificar o original.
      </Paragraph>
      <Iframes
        description="how to use filter"
        url="https://jsfiddle.net/bluues/w78u2yqm/5/embedded/js/"
      />

      <Title>Método Reduce</Title>
      <Paragraph>
        Além de alterar os dados de um array ou até mesmo filtrar eles através
        de condições. As vezes será nescessario alguns valores como: somátoria
        de todos os elementos do array ou até mesmo a média dos valores do
        vetor. E o reduce resolve este problema tranquilamente.
      </Paragraph>
      <Iframes
        description="how to use reduce"
        url="https://jsfiddle.net/bluues/bu3kdj6p/8/embedded/js/"
      />

      <ContentInfos>
        <Title>{infos}</Title>
        <Links>
          <StyledLink to="/array-helpers/filter-with-map">
            {mapWithFilter[0].title}
          </StyledLink>
        </Links>
      </ContentInfos>
    </Content>
  )
}

export const pageQuery = graphql`
  query functionsPures {
    markdownRemark(fileAbsolutePath: { regex: "/array-helpers.md/" }) {
      frontmatter {
        title
        subtitle
        explanation
        infos
        date
        mapWithFilter {
          title
        }
      }
    }
  }
`

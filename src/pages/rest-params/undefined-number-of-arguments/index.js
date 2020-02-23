import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Paragraph } from "../../styles"

import Iframes from "../../../components/iframes/"
import SEO from "../../../components/seo"

export default function UndefinedNumberOfArguments({ data }) {
  const { title } = data.markdownRemark.frontmatter.undefinedNumberOfArguments[0]
  const {
    subtitle,
  } = data.markdownRemark.frontmatter.undefinedNumberOfArguments[1]
  const {
    explanation,
  } = data.markdownRemark.frontmatter.undefinedNumberOfArguments[2]
  return (
    <Content>
      <SEO
        title={title}
        description={subtitle}
      />
      <Title>{title}</Title>
      <Paragraph>{subtitle}</Paragraph>
      <Paragraph>{explanation}</Paragraph>
      <Iframes
        description="iframe undefined number of arguments"
        url="//jsfiddle.net/coder404/v3o2s1Le/10/embedded/"
      />
      <Paragraph>
        Repare como temos um código feio, e se formos adiconar mais argumentos
        mais feio vai ficar, então com o ES6, temos o rest parameters que ajuda
        a resolver esse problema de um jeito mais fácil.
      </Paragraph>
      <Iframes
        description="iframe undefined number of arguments"
        url="//jsfiddle.net/coder404/v3o2s1Le/12/embedded/"
      />
      <Paragraph>
        Como não sei a quantidade de argumentos que vou receber então passei o rest
        params, mas eu vou continuar a recebe-lôs como array. E simplesmente dei um 
        map que recebe o primeiro argumento e multiplica pelo mult. 
      </Paragraph>
      <Paragraph>
        Então sempre que não teres certeza de quantos argumentos você vai
        receber na funcção use o rest params.
      </Paragraph>
    </Content>
  )
}

export const pageQuery = graphql`
  query undefinedNumberOfArgumentsPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/rest-params.md/" }) {
      frontmatter {
        undefinedNumberOfArguments {
          title
          subtitle
          explanation
        }
      }
    }
  }
`

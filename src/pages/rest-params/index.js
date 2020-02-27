import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Subtitle, Paragraph, Links, ContentInfos } from "../styles"
import { StyledLink } from "../../components/layout/styles"

import Iframes from "../../components/iframes/"
import SEO from "../../components/seo"

export default function RestParameters({ data }) {
  const {
    title,
    subtitle,
    explanation,
    infos,
    undefinedNumberOfArguments,
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
        description="iframe rest params"
        url="https://jsfiddle.net/coder404/v3o2s1Le/24/embedded/js/"
      />
        <Paragraph>{explanation}</Paragraph>
        <Paragraph>
          Para resumir o rest, quando você põe ...qualquerCoisa como parâmetro
          numa função significa: Junte todos os parâmetros restantes.
        </Paragraph>
          <ContentInfos>
        <Subtitle>{infos}</Subtitle>
        <Links>
          <StyledLink to="rest-params/undefined-number-of-arguments">
            {undefinedNumberOfArguments[0].title}
          </StyledLink>
        </Links>
      </ContentInfos>
    </Content>
  )
}

export const FunctionPageQuery = graphql`
  query RestParams {
    markdownRemark(fileAbsolutePath: { regex: "/rest-params/" }) {
      frontmatter {
        title
        subtitle
        infos
        explanation
        undefinedNumberOfArguments {
          title
          subtitle
        }
      }
    }
  }
`

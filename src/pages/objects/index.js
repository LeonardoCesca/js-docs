import React from "react"
import { graphql } from "gatsby"

import { Content, Title, Subtitle, Paragraph, Links, ContentInfos } from "../styles"
import { StyledLink } from "../../components/layout/styles"

import Iframes from "../../components/iframes"
import SEO from "../../components/seo"

export default function Objects({ data }) {
  const {
    title,
    subtitle,
    explanation,
    infos,
    ObjectsIteration,
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
        description="iframe objects example"
        url=""
      />
        <Paragraph>{explanation}</Paragraph>
        <Subtitle>Exemplo mais elaborado</Subtitle>
        <Paragraph>
          TO DO
        </Paragraph>
        <Iframes
          description=""
          url=""
          />
        <ContentInfos>
          <Subtitle>{infos}</Subtitle>
          <Links>
            <StyledLink to="objects/objects-iteration/">
              {ObjectsIteration[0].title}
            </StyledLink>
            {/* {ObjectsIteration[0].subtitle} */}
          </Links>
        </ContentInfos>
    </Content>
  )
}

export const ObjectsPageQuery = graphql`
  query Objects {
    markdownRemark(fileAbsolutePath: { regex: "/objects.md/" }) {
      frontmatter {
        title
        subtitle
        infos
        explanation
        ObjectsIteration {
          title
          subtitle
        }
      }
    }
  }
`

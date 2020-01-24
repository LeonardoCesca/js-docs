import React from 'react';
import { graphql, Link } from 'gatsby';

import { Content, Title, Paragraph, Iframe, Links, ContentInfos } from '../styles';
import { StyledLink } from '../../components/layout/styles';
 
export default function Function ({data}) {
  return (
    <Content>
      <Title>
        {data.markdownRemark.frontmatter.title}
      </Title>
      <Paragraph>
        {data.markdownRemark.frontmatter.subtitle}
      </Paragraph>
      <Iframe>
        <iframe src="https://jsfiddle.net/Bruno_Ramires/mhja5r9n/3/embedded/js/"></iframe>
      </Iframe>
      <ContentInfos>
        <Title>{data.markdownRemark.frontmatter.infos}</Title>
        <Links>
          <StyledLink to='function/function-expression/'>{data.markdownRemark.frontmatter.functionExpression[0].title}</StyledLink>
        </Links>
      </ContentInfos>
    </Content>
  )
}

export const FunctionPageQuery = graphql`
    query FunctionPageQuery {
        markdownRemark(fileAbsolutePath: {regex: "/function.md/"}) {
        frontmatter {
            title
            subtitle
            explanation
            infos
            functionExpression {
            subtitle
            title
            }
        }
        }
    }
`

  
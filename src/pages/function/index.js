import React from 'react';
import { graphql, Link } from 'gatsby';

import { Content, Title, Paragraph, Iframe, Links, ContentInfos } from '../styles';

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
        <span>frame</span>
        {/* <iframe src="https://jsfiddle.net/leonardocesca/btk8Le1q/6/embedded/js/"></iframe> */}
      </Iframe>
      <Paragraph>
        {data.markdownRemark.frontmatter.explanation}
      </Paragraph>
      <Iframe>
        <span>frame</span>
        {/* <iframe src="https://jsfiddle.net/leonardocesca/gLzxme57/3/embedded/js/"></iframe> */}
      </Iframe>
      <ContentInfos>
        <Title>{data.markdownRemark.frontmatter.infos}</Title>
        <Links>
          <Link to='function/function-expression/'>{data.markdownRemark.frontmatter.functionExpression[0].title}</Link>
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

  
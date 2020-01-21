import React from 'react';
import { graphql } from 'gatsby'

import { DestructuringContent, DestructuringTitle, DestructuringParagraph } from './styles';

export default function Destructuring ({data}) {
  return (
    <DestructuringContent>
      <DestructuringTitle>
        {data.markdownRemark.frontmatter.title}
      </DestructuringTitle>
      <DestructuringParagraph>
        {data.markdownRemark.frontmatter.subtitle}
      </DestructuringParagraph>
    </DestructuringContent>
  )
}

export const pageQuery = graphql`
  query DestructuringPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/destructuring.md/" }) {
      frontmatter {
        title
        subtitle
        date
      }
    }
  }
`
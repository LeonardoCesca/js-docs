import React from 'react';
import { graphql } from 'gatsby'

import { DestructuringContent, DestructuringTitle, DestructuringParagraph, DestructuringIframe } from './styles';

export default function Destructuring ({data}) {
  return (
    <DestructuringContent>
      <DestructuringTitle>
        {data.markdownRemark.frontmatter.title}
      </DestructuringTitle>
      <DestructuringParagraph>
        {data.markdownRemark.frontmatter.subtitle}
      </DestructuringParagraph>
      <DestructuringIframe>
        <iframe src="https://jsfiddle.net/leonardocesca/btk8Le1q/3/embedded/js/"></iframe>
      </DestructuringIframe>
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
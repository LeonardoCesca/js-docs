import React from 'react';
import { graphql } from "gatsby"

import { DestructuringContent, DestructuringTitle, Iframe } from './styles';

export default function Destructuring ({data}) {
  return (
    <DestructuringContent>
      <DestructuringTitle>{data.markdownRemark.frontmatter.title}</DestructuringTitle>
      <p>{data.markdownRemark.frontmatter.subtitle}</p>
      <p>{data.markdownRemark.frontmatter.date}</p>
      <Iframe>
        <iframe width="1024px;" height="473px;"
          src="https://carbon.now.sh/embed?bg=rgba(171%2C%20184%2C%20195%2C%201)&t=seti&wt=none&l=auto&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=4x&wm=false&code=const%2520carro%2520%253D%2520%257B%250A%2520%2520marca%253A%2520'Fiat'%252C%250A%2520%2520ano%253A%25202018%252C%250A%2520%2520portas%253A%25204%252C%250A%257D%250A%250Aconst%2520%257Bmarca%252C%2520ano%257D%2520%253D%2520carro%253B%250A%250Aconsole.log(marca)%253B%2520%252F%252F%2520Fiat%250Aconsole.log(ano)%253B%2520%252F%252F%25202018%250A">
        </iframe>
      </Iframe>
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
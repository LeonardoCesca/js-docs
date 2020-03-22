import React from 'react'

import { Content, Title, Paragraph } from './styles';

import { GlobalStyle } from '../theme/globalStyle';
import SEO from "../components/seo"

const NotFoundPage = () => {
  const title = "NOT FOUND"
  const description = "Página não existe :("

  return (
    <Content>
      <SEO
        title={title}
        description={description}
      />
      <GlobalStyle />
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
    </Content>
  )
}

export default NotFoundPage
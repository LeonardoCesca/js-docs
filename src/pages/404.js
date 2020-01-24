import React from 'react'

import { Content, Title, Paragraph } from './styles';

import { GlobalStyle } from '../theme/globalStyle';

const NotFoundPage = () => (
  <Content>
    <GlobalStyle />
    <Title>NOT FOUND</Title>
    <Paragraph>Página não existe :(</Paragraph>
  </Content>
)

export default NotFoundPage
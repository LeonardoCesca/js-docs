import React from 'react';

import { Content, Title, Paragraph } from './styles';

import Authors from  '../components/authors/index';

export default function Home() {
  return (
    <Content>
      <Title>Home</Title>
      <Authors />
      <Paragraph> Se você contribuir com o projeto, poderá aparecer aqui também :) </Paragraph>
    </Content>
  )
}

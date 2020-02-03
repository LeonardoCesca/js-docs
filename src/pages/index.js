import React from 'react';

import { Content, Title, Paragraph } from './styles';

import Contributors from '../components/contributors';

export default function Home() {
  return (
    <Content>
      <Title>Home</Title>
      <Paragraph> Se você contribuir com o projeto, poderá aparecer aqui também :) </Paragraph>
      <Contributors />
    </Content>
  )
}

import React from 'react';

import { Content, Title } from './styles';

import Authors from  '../components/authors/index';

export default function Home() {
  return (
    <Content>
      <Title>Home</Title>
      <Authors />
    </Content>
  )
}

import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

import { GlobalStyle } from '../../theme/globalStyle';

import { Container, ContainerMenu, ContainerLink, Title, ContainerContent, StyledLink } from './styles';

import Footer from '../footer/index';

const SidebarItems = props => (
  <ContainerLink>
    <StyledLink to={props.to}>{props.children}</StyledLink>
  </ContainerLink>
)

export default ({ children }) => (
  useEffect(() => {
    navigate('/home/')
  }, []),
  (
    <Container>
      <GlobalStyle />
      <ContainerMenu>
        <Title>JavaScript - Introdução</Title>
        <SidebarItems to='/home/'>Home</SidebarItems>
        <SidebarItems to='/destructuring/'>Destructuring</SidebarItems>
        <Footer />
      </ContainerMenu>
      <ContainerContent>
        {children}
      </ContainerContent>
    </Container>
  )
)

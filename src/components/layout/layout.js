import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'

import { GlobalStyle } from '../../theme/globalStyle';

import { Container, Hamburger, ContainerMenu, ContainerLink, Title, ContainerContent, StyledLink, CloseButton, ContainerHamburguer } from './styles';

import Footer from '../footer/index';

const SidebarItems = props => (
  <ContainerLink>
    <StyledLink to={props.to}>{props.children}</StyledLink>
  </ContainerLink>
)

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Container>
      <GlobalStyle />
        {isVisible ? (
      <ContainerMenu onClick={() => setIsVisible(!isVisible)}>
          <Title>JavaScript - Introdução</Title>
          <SidebarItems to='/'>Home</SidebarItems>
          <SidebarItems to='/destructuring/'>Destructuring</SidebarItems>
          <Footer 
          made="Made with"
          leo="Leonardo Cesca"
          leo_github="https://github.com/LeonardoCesca"
          bruno="Bruno Ramires"
          bruno_github="https://github.com/brunormferreira"
          />
          <CloseButton></CloseButton>
      </ContainerMenu>
        ):(
          <ContainerHamburguer>
            <Hamburger onClick={() => setIsVisible(!isVisible)} />
          </ContainerHamburguer>
        )} 
      <ContainerContent>
        {children}
      </ContainerContent>
    </Container>
  )
}

export default Layout;

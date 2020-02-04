import React, { useState } from 'react';

import { Helmet } from 'react-helmet';

import { GlobalStyle } from '../../theme/globalStyle';

import { Container, Hamburger, ContainerMenu, ContainerLink, Title, ContainerContent, StyledLink, CloseButton, ContainerHamburguer, FadeIn } from './styles';

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>JavaScript Doc's</title>
      </Helmet>
      <GlobalStyle />
        {isVisible ? (
      <ContainerMenu onClick={() => setIsVisible(!isVisible)}>
        <FadeIn>
          <Title>JavaScript - Introdução</Title>
          <SidebarItems to='/'>Home</SidebarItems>
          <SidebarItems to='/destructuring/'>Destructuring</SidebarItems>
          <SidebarItems to='/function/'>Function</SidebarItems>
          <CloseButton></CloseButton>
          <Footer made="Made with" />
        </FadeIn>
      </ContainerMenu>
        ):(
          <ContainerHamburguer>
            <FadeIn>
              <Hamburger onClick={() => setIsVisible(!isVisible)} />
            </FadeIn>
          </ContainerHamburguer>
        )} 
      <ContainerContent>
        {children}
      </ContainerContent>
    </Container>
  )
}

export default Layout;

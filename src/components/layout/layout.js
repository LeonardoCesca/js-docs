import React, { useEffect, useState } from 'react'
import { navigate } from 'gatsby'

import { GlobalStyle } from '../../theme/globalStyle';

import { Container, Hamburger, ContainerMenu, ContainerLink, Title, ContainerContent, StyledLink } from './styles';

import Footer from '../footer/index';

const SidebarItems = props => (
  <ContainerLink>
    <StyledLink to={props.to}>{props.children}</StyledLink>
  </ContainerLink>
)

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

console.log(getWidth());

const Layout = ({ children }) => {
  
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    navigate('/home/')
  }, [])

  return (
    <Container>
      <GlobalStyle />
        {isVisible && getWidth() > 768 ? (
      <ContainerMenu onClick={() => setIsVisible(!isVisible)}>
          <Title>JavaScript - Introdução</Title>
          <SidebarItems to='/home/'>Home</SidebarItems>
          <SidebarItems to='/destructuring/'>Destructuring</SidebarItems>
          <Footer 
          made="Made with"
          leo="Leonardo Cesca"
          leo_github="https://github.com/LeonardoCesca"
          bruno="Bruno Ramires"
          bruno_github="https://github.com/brunormferreira"
          />
      </ContainerMenu>
        ): <Hamburger onClick={() => setIsVisible(!isVisible)} />  } 
      <ContainerContent>
        {children}
      </ContainerContent>
    </Container>
  )
}

export default Layout;

import React, { useState } from "react"

import { Helmet } from "react-helmet"

import { GlobalStyle } from "../../theme/globalStyle"

import {
  Container,
  Hamburger,
  ContainerMenu,
  ContainerLink,
  Title,
  ContainerContent,
  StyledLink,
  CloseButton,
  ContainerHamburguer,
  FadeIn,
} from "./styles"

import Footer from "../footer/index"

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
        <meta name="description" content="Projeto open-source que tem por objetivo contribuir com a comunidade Javascript." />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://javascript-docs.netlify.com/" />
        <meta property="og:title" content="Javascript Doc's" />
        <meta property="og:description" content="Feito em Gatsby com GraphQL." />
      </Helmet>
      <GlobalStyle />
      {isVisible ? (
        <ContainerMenu onClick={() => setIsVisible(!isVisible)}>
          <FadeIn>
            <Title>JavaScript Doc's</Title>
            <SidebarItems to="/">Home</SidebarItems>
            <SidebarItems to="/destructuring/">Destructuring</SidebarItems>
            <SidebarItems to="/function/">Function</SidebarItems>
            <CloseButton></CloseButton>
            <Footer made="Made with" />
          </FadeIn>
        </ContainerMenu>
      ) : (
        <ContainerHamburguer>
          <FadeIn>
            <Hamburger onClick={() => setIsVisible(!isVisible)} />
          </FadeIn>
        </ContainerHamburguer>
      )}
      <ContainerContent>{children}</ContainerContent>
    </Container>
  )
}

export default Layout

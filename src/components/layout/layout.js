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
  ContentMenu,
  StyledLink,
  CloseButton,
  ContainerHamburguer,
  FadeIn,
  ToggleButton,
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
        <>
        <ContainerMenu>
          <Title>JavaScript Doc's</Title>
          <FadeIn>
            <ContentMenu onClick={() => setIsVisible(!isVisible)}>
              <SidebarItems to="/">Home</SidebarItems>
              <SidebarItems to="/destructuring/">Destructuring</SidebarItems>
              <SidebarItems to="/function/">Function</SidebarItems>
              <CloseButton onClick={() => setIsVisible(!isVisible)}></CloseButton>
            </ContentMenu>
          </FadeIn>
            <Footer made="Made with" />
        </ContainerMenu>
        <ToggleButton onClick={() => setIsVisible(!isVisible)} />
        </>
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

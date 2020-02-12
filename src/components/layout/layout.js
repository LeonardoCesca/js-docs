import React, { useState } from "react"

import { Helmet } from "react-helmet"

import { GlobalStyle } from "../../theme/globalStyle"

import Corner from "../corner/index"

import {
  Container,
  HamburgerWrapper,
  Hamburger,
  ContainerMenu,
  ContainerLink,
  ContainerContent,
  ContentMenu,
  StyledLink,
  ContainerHamburguer,
  HamburgerLine,
  MenuHamburgerWrapper,
  TitleMenu,
  ContentHeader,
  ContentHeaderHamburger,
  MenuItems,
} from "./styles"

import Footer from "../footer/index"

const SidebarItems = props => (
  <ContainerLink>
    <StyledLink to={props.to}>{props.children}</StyledLink>
  </ContainerLink>
)

const Layout = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>JavaScript Doc's</title>
        <meta
          name="description"
          content="Projeto open-source que tem por objetivo contribuir com a comunidade Javascript."
        />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://javascript-docs.netlify.com/"
        />
        <meta property="og:title" content="Javascript Doc's" />
        <meta
          property="og:description"
          content="Feito em Gatsby com GraphQL."
        />
      </Helmet>
      <GlobalStyle />
      <>
        <MenuHamburgerWrapper onClick={() => setIsOpened(!isOpened)}
          className={isOpened ? "opened" : "closed"}>
          <ContainerHamburguer />
        </MenuHamburgerWrapper>
        {isOpened ? (
        <ContainerMenu>
          <ContentHeader>
            <ContentHeaderHamburger />
          </ContentHeader>
            <TitleMenu>JavaScript Doc's</TitleMenu>
          <ContentMenu>
            <MenuItems onClick={() => setIsOpened(!isOpened)}>
              <SidebarItems to="/" activeClassName="active">
                Home
              </SidebarItems>
              <SidebarItems to="/destructuring">Destructuring</SidebarItems>
              <SidebarItems to="/function">Function</SidebarItems>
              <SidebarItems to="/ternary-operator">Ternary Operator</SidebarItems>
              <SidebarItems to="/if-else">If Else</SidebarItems>
              <SidebarItems to="/for">Loop For</SidebarItems>
              <SidebarItems to="/array-helpers">Array Helpers</SidebarItems>
              <SidebarItems to="/spread-operator">Spread Operator</SidebarItems>
            </MenuItems>
          </ContentMenu>
          <Footer made="Made with" />
        </ContainerMenu>
        ): null}
        <HamburgerWrapper>
          <Hamburger
            className={isOpened ? "opened" : "closed"}
            onClick={() => setIsOpened(!isOpened)}
          >
            <HamburgerLine className={isOpened ? "opened" : "closed"} />
          </Hamburger>
        </HamburgerWrapper>
      </>
      <ContainerContent>{children}</ContainerContent>
      <Corner />
    </Container>
  )
}

export default Layout

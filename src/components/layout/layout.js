import React, { useState } from "react"

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
      <GlobalStyle />

      <MenuHamburgerWrapper
        onClick={() => setIsOpened(!isOpened)}
        className={isOpened ? "opened" : "closed"}
      >
        <ContainerHamburguer />
      </MenuHamburgerWrapper>

      {isOpened && (
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
              <SidebarItems to="/rest-params">Rest Parameters</SidebarItems>
              <SidebarItems to="/json">JSON</SidebarItems>
              <SidebarItems to="/closure">Closure</SidebarItems>
              <SidebarItems to="/switch">Switch</SidebarItems>
	            <SidebarItems to="/string-padding">String Padding</SidebarItems>
	            <SidebarItems to="/flat">Flat</SidebarItems>
            </MenuItems>
          </ContentMenu>

          <Footer made="Made with" />
        </ContainerMenu>
      )}

      <HamburgerWrapper>
        <Hamburger
          className={isOpened ? "opened" : "closed"}
          onClick={() => setIsOpened(!isOpened)}
        >
          <HamburgerLine className={isOpened ? "opened" : "closed"} />
        </Hamburger>
      </HamburgerWrapper>

      <ContainerContent className={isOpened && "blocked"}>
        {children}
      </ContainerContent>

      <Corner />
    </Container>
  )
}

export default Layout

import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"

import { GlobalStyle } from '../../theme/globalStyle';

import { Container, ContainerMenu, Linkao, Title, ContainerContent } from './styles';

const ListLink = props => (
  <Linkao>
    <Link to={props.to}>{props.children}</Link>
  </Linkao>
)

export default ({ children }) => (
  useEffect(() => {
    navigate("/home/")
  }, []),
  (
    <Container>
      <GlobalStyle />
      <ContainerMenu>
        <ListLink to="/home/">Home</ListLink>
        <Title>JavaScript - Introdução</Title>
        <ListLink to="/destructuring/">Destructuring</ListLink>
      </ContainerMenu>
      <ContainerContent>
        {children}
      </ContainerContent>
      </Container>
  )
)

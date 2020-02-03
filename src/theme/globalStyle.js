import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    height: calc(100vh - 15px);
    font-family: 'Open Sans', 'Helvetica Neue', Ubuntu;
  }

  div {
    width: 100%;
  }

  #___gatsby > * {
    display:flex;
    background: rgb(40, 44, 53);
  }
`;
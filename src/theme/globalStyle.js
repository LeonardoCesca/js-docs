import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    height: calc(100vh - 15px);
  }

  div {
    width: 100%;
  }
`;
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    height: calc(100vh - 15px);
    font-family: 'Open Sans', 'Helvetica Neue', Ubuntu;
    background: rgb(40, 44, 53);
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  div {
    width: 100%;
  }

  #___gatsby > * {
    display:flex;
    background: rgb(40, 44, 53);
  }

  h1, h2, h3, h4, h5 {
    text-decoration: none !important;
    color: #ff9900;
    font-weight: 700;
  }
`

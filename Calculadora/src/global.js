import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    font-family: Roboto;
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    &:focus {
      outline: none;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  span, p, h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
  }

  :root {

    width: 100%;
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, rgb(211, 204, 227), rgb(233, 228, 240));
    text-align: center;
  }
`

export default GlobalStyles
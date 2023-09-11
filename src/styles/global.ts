import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    background: ${(props) => props.theme.background};
    min-height: 100vh;
  }

  body, input, textarea, button {
    font: 1rem 'Baloo 2', sans-serif;
    font-weight: 400;
  }

  textarea:focus, input:focus{
    outline: none;
  }

  @media (max-width: 768px) {
    html {
      font-size: 84%;
    }
  }
`

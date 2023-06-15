import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #909090;
      border-radius: 2rem;
    }
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    width: 100%;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 1.3rem;
    padding: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 200%;
    color: #777;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

export default GlobalStyles;

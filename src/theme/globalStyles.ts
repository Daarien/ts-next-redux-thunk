import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    font-size: 16px;
    line-height: 1.4;
  }
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: pointer;
    font-family: inherit;
    outline: none;
  }
  /* other styles */
`;

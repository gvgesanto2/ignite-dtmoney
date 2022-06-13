import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Color Pallete */
    --color-grey-light-1: #f0f2f5;
    --color-red: #e52e4d;
    --color-blue: #5429cc;
    --color-blue-light: #6933ff;
    --color-white: #ffffff;

    /* Other color variables */
    --background-color: var(--color-grey-light-1);
    --text-title: #363f5f;
    --text-body: #969cb3; 
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: var(--background-color);
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

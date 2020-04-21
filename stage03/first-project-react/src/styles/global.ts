import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github.svg';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
    height: 100%;
    font: 16px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
  }

  input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: #FFF;

    /* 1rem = 10px */
    font-size: 62.5%;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 1200px) {
    padding: 0 20px;
  }
`;

export { GlobalStyle, Content };

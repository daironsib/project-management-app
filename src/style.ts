import styled, { createGlobalStyle } from 'styled-components';

const AppBlock = styled.div`
  flex: 1 0 auto;
`
const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`
export { AppBlock, GlobalStyle };
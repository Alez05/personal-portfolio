// styles/global.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --whiteish: ${({ theme }) => theme.colors.whiteish};
    --cream: ${({ theme }) => theme.colors.cream};
    --blue: ${({ theme }) => theme.colors.darkBlue};
    --black: ${({ theme }) => theme.colors.black};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.whiteish};
    color: ${({ theme }) => theme.colors.black};
    font-family: var(--font-roboto-slab);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

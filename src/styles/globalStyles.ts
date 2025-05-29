import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${theme.fonts.main};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${theme.spacing.md};
    font-weight: 600;
    line-height: 1.2;
  }

  h1 {
    font-size: ${theme.fontSizes['5xl']};
  }

  h2 {
    font-size: ${theme.fontSizes['4xl']};
  }

  h3 {
    font-size: ${theme.fontSizes['3xl']};
  }

  h4 {
    font-size: ${theme.fontSizes['2xl']};
  }

  h5 {
    font-size: ${theme.fontSizes.xl};
  }

  h6 {
    font-size: ${theme.fontSizes.lg};
  }

  p {
    margin-bottom: ${theme.spacing.md};
  }

  a {
    color: ${theme.colors.accent};
    text-decoration: none;
    transition: color ${theme.animations.fast} ease;

    &:hover {
      color: ${theme.colors.primary};
    }
  }

  button {
    cursor: pointer;
    font-family: ${theme.fonts.main};
  }

  ul, ol {
    margin-left: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.md};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  code {
    font-family: ${theme.fonts.code};
    background-color: ${theme.colors.backgroundSecondary};
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    border-radius: ${theme.borderRadius.sm};
    font-size: ${theme.fontSizes.sm};
  }

  ::selection {
    background-color: ${theme.colors.primary};
    color: white;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.backgroundSecondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.secondary};
  }
`;

export default GlobalStyles;

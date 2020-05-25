import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primaryLight: '#fefefc',
    secondaryLight: '#bbbbbb',
    primaryDark: '#383838',
    secondaryDark: '#464646',
    primaryGold: '#e8d992',
    secondaryGold: '#ccb76e',
    disabled: '#e8e1d3',
    responseRed: '#ff0000',
    responseGreen: '#17b717'
  },
  breakpoints: {
    mobileTablet: '@media (min-width: 768px)',
    tabletDesktop: '@media (min-width: 1024px)',
    maxWidth: '1280px'
  }
};

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

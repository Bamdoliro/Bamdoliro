import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as P from './pages';
import theme from './shared/styles/theme';
import Header from './components/Header';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <P.Main />
      <P.TeamMate />
    </ThemeProvider>
  );
}

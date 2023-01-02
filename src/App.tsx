import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as P from './pages';
import theme from './shared/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <P.Main />
    </ThemeProvider>
  );
}

import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as P from './Pages';
import theme from './Shared/Styles/Theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <P.Main />
    </ThemeProvider>
  );
}

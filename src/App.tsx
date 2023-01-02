import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as P from './Pages';
import GlobalStyled from './Shared/Styles/GlobalStyle';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<P.Main />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyled />
    </>
  );
}

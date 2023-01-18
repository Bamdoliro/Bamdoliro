import React from 'react';
import * as P from './pages';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <P.Main />
      <P.History />
    </>
  );
}

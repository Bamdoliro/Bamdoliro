import React from 'react';
import { RecoilRoot } from 'recoil';
import * as P from './pages';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <RecoilRoot>
        <Header />
        <P.Main />
        <P.TeamMate />
        <P.History />
         <P.Culture />
      </RecoilRoot>
    </>
  );
}

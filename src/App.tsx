import React, { useState, useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import * as P from './pages';
import Header from './components/Header';

export default function App() {
  // 현재 좌표를 구할수있슴둥
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    console.log(position);
  }, [position]);

  return (
    <RecoilRoot>
      <Header />
      <P.Main />
      <P.Introduce /> {/* 0 */}
      <P.History /> {/* 2 */}
      <P.Projects /> {/* 3 */}
      <P.TeamMate /> {/* 1 */}
    </RecoilRoot>
  );
}

import React from 'react';
import * as S from './style';
import Logo from '../../Assets/logo.svg';

export default function Header() {
  return (
    <S.HeaderFrame>
      <S.Logo src={Logo} />
    </S.HeaderFrame>
  );
}

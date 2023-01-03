import React from 'react';
import * as S from './style';
import Logo from '../../assets/logo.svg';
import Button from '../Common/Button';

export default function Header() {
  return (
    <S.HeaderFrame>
      <S.Logo src={Logo} />
      <Button onClick={() => console.log('click')} title="button" />
    </S.HeaderFrame>
  );
}

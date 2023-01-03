import React from 'react';
import * as S from './style';
import Logo from '../../assets/logo.svg';
import Button from '../Common/Button';

export default function Header() {
  return (
    <S.Header>
      <S.InnerFrame>
        <S.Logo src={Logo} />
        <S.Nav>
          <Button onClick={() => console.log('click')} title="팀 소개" />
          <Button onClick={() => console.log('click')} title="팀원 소개" />
          <Button onClick={() => console.log('click')} title="팀 문화" />
          <Button onClick={() => console.log('click')} title="프로젝트" />
        </S.Nav>
      </S.InnerFrame>
    </S.Header>
  );
}

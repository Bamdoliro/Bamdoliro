import React from 'react';
import { color } from 'shared/styles/theme';
import * as S from './style';
import Logo from '../../assets/logo.svg';
import Button from '../common/Button';

export default function Header() {
  return (
    <S.Header>
      <S.InnerFrame>
        <S.Logo src={Logo} onClick={() => window.location.reload()} />
        <S.Nav>
          <Button
            onClick={() => console.log('팀 소개')}
            title="팀 소개"
            color={color.gray04}
          />
          <Button
            onClick={() => console.log('팀원 소개')}
            title="팀원 소개"
            color={color.gray04}
          />
          <Button
            onClick={() => console.log('팀 문화')}
            title="팀 문화"
            color={color.gray04}
          />
          <Button
            onClick={() => console.log('프로젝트')}
            title="프로젝트"
            color={color.gray04}
          />
        </S.Nav>
      </S.InnerFrame>
    </S.Header>
  );
}

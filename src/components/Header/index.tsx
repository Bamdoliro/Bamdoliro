import React, { useState } from 'react';
import { color } from 'shared/styles/theme';
import * as S from './style';
import Logo from '../../assets/logo.svg';
import Button from '../common/Button';

export default function Header() {
  const ItemData = [
    { id: 0, title: '팀 소개' },
    { id: 1, title: '팀원 소개' },
    { id: 2, title: '팀 문화' },
    { id: 3, title: '프로젝트' },
  ];

  return (
    <S.Header>
      <S.InnerFrame>
        <S.Logo src={Logo} onClick={() => window.location.reload()} />
        <S.Nav>
          {ItemData.map((item, index) => {
            return (
              <Button
                key={item.id}
                title={item.title}
                color={color.gray04}
                onClick={() => console.log(item)}
              />
            );
          })}
        </S.Nav>
      </S.InnerFrame>
    </S.Header>
  );
}

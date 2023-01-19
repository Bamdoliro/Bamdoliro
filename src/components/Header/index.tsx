/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { color } from 'shared/styles/theme';
import * as S from './style';
import Logo from '../../assets/logo.svg';
import Button from '../common/Button';

export default function Header() {
  const ItemData = ['팀 소개', '팀원 소개', '팀 문화', '프로젝트'];

  return (
    <S.Header>
      <S.InnerFrame>
        <S.Logo src={Logo} onClick={() => window.location.reload()} />
        <S.Nav>
          {ItemData.map((item, index) => {
            return (
              <Button
                key={index}
                title={item}
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

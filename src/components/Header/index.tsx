import React from 'react';
import { color } from 'shared/styles/theme';
import header from 'data/header.json';
import * as S from './style';
import Logo from '../../assets/logo.svg';
import Button from '../common/Button';

export default function Header() {
  return (
    <S.Header>
      <S.InnerFrame>
        <S.Logo src={Logo} onClick={() => window.location.reload()}/>
        <S.Nav>
          {header.map((item) => {
            return (
              <a href={item.to} key={item.id}>
                <Button
                  title={item.title}
                  color={color.gray04}
                  onClick={() => console.log(item)}
                />
              </a>
            );
          })}
        </S.Nav>
      </S.InnerFrame>
    </S.Header>
  );
}

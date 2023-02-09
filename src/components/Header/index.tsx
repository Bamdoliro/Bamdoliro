import React, { useState } from 'react';
import { color } from 'shared/styles/theme';
import { Link } from 'react-scroll';
import HeaderData from 'data/HeaderData.json';
import * as S from './style';
import Logo from '../../assets/logo.svg';
import Button from '../common/Button';

export default function Header() {
  return (
    <S.Header>
      <S.InnerFrame>
        <S.Logo src={Logo} onClick={() => window.location.reload()} />
        <S.Nav>
          {HeaderData.map((item) => {
            return (
              <Link to={item.to} key={item.id} spy smooth>
                <Button
                  title={item.title}
                  color={color.gray04}
                  onClick={() => console.log(item)}
                />
              </Link>
            );
          })}
        </S.Nav>
      </S.InnerFrame>
    </S.Header>
  );
}

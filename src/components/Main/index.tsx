import React from 'react';
import { Link } from 'react-scroll';
import * as S from './style';
import * as T from '../../shared/styles/text';
import Arrow from '../../assets/arrow.svg';

export default function Main() {
  return (
    <S.Main>
      <S.TextArea>
        <T.LargeTitle color="#fff">
          대서양 한가운데에서 밤돌이로를 외치다.
        </T.LargeTitle>
      </S.TextArea>
      <S.ArrowBox>
        <S.ArrowBtn>
          <Link to="0" spy smooth>
            <S.Arrow src={Arrow} />
          </Link>
        </S.ArrowBtn>
      </S.ArrowBox>
    </S.Main>
  );
}

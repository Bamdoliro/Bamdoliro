import React from 'react';
import * as T from 'styles/text';
import Arrow from 'assets/arrow.svg';
import * as S from './style';

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
          <a href="/#introduce">
            <S.Arrow src={Arrow} />
          </a>
        </S.ArrowBtn>
      </S.ArrowBox>
    </S.Main>
  );
}

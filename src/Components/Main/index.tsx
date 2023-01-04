import React from 'react';
import * as S from './style';
import * as T from '../../shared/styles/text';
import Background from '../../assets/background01.svg';

export default function Main() {
  return (
    <S.Main>
      <S.TextArea>
        <T.LargeTitle color="#fff">
          대서양 한가운데에서 밤돌이로를 외치다.
        </T.LargeTitle>
      </S.TextArea>
    </S.Main>
  );
}

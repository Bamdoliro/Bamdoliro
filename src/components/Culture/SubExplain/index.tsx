import React from 'react';
import * as S from './style';

export interface PropsType {
  IconImage: string;
  SubTitle: string;
  Explain: string;
}

export default function SubExplain({
  IconImage,
  SubTitle,
  Explain,
}: PropsType) {
  return (
    <S.Container>
      <S.IconImg src={IconImage} />
      <S.SubTitle>{SubTitle}</S.SubTitle>
      <S.Explain>{Explain}</S.Explain>
    </S.Container>
  );
}

import React from 'react';
import Culture from 'data/Culture.json';
import TitleWrap from '../common/TitleWrap/index';
import SubExplain from './SubExplain';
import * as S from './style';
import TwoPeople from '../../assets/two-people.svg';

export default function TeamCulture() {
  return (
    <S.Container id="3">
      <S.Wrap>
        <TitleWrap title="팀 문화" desc={'우리는 함께\n성장하기를 꿈꿔요'} />
        <S.SubExplains>
          {Culture.map((item) => {
            return (
              <SubExplain
                key={item.id}
                IconImage={TwoPeople}
                SubTitle={item.SubTitle}
                Explain={item.Explain}
              />
            );
          })}
        </S.SubExplains>
      </S.Wrap>
    </S.Container>
  );
}
